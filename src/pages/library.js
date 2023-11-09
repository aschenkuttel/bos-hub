import { useEffect, useState } from 'react'
import Image from 'next/image'
import { db } from '@/lib/firebase/init'
import { doc, getDoc, query, where, collection, getDocs, documentId } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'
import { useBookmarkStore } from '@/stores/bookmarks'
import Button from '@/components/Button'
import { Card } from '@/components/Card'
import Bookmark from '@/components/Bookmark'
import Spinner from '@/components/Spinner'

export default function Library() {
    const [loading, setLoading] = useState(false)
    const [apps, setApps] = useState([])
    const accountId = useAuthStore((store) => store.accountId)
    const bookmarks = useBookmarkStore((store) => store.bookmarks)

    const fetchBookmarkedApps = async () => {
        const colRef = collection(db, 'apps')
        const queryRef = query(colRef, where(documentId(), 'in', bookmarks))

        const result = await getDocs(queryRef)

        const bookmarkedApps = []

        result.forEach((doc) => {
            const appData = doc.data()
            appData.id = doc.id
            bookmarkedApps.push(appData)
        })

        return bookmarkedApps
    }

    useEffect(() => {
        if (!accountId || bookmarks.length === 0) return

        fetchBookmarkedApps().then((bookmarkedApps) => {
            setApps(bookmarkedApps)
            setLoading(false)
        })
    }, [accountId, bookmarks])

    if (loading) {
        return <div className="flex-1">
            <Spinner />
        </div>
    } else if (apps.length === 0) {
        return (
            <div className='flex-1'>
                <p>Nothing bookmarked yet :(</p>
            </div>
        )
    }

    return (
        <div className='flex-1'>
            <div className='max-w-5xl w-full flex flex-wrap gap-8 mt-8'>
                {apps.map((app) => {
                    return (
                        <Card key={app.name} innerClassName='relative !p-0'>
                            <Image
                                src={app.iconUrl}
                                alt={app.name}
                                width={200}
                                height={200}
                                className='aspect-square'
                            />

                            <Bookmark
                                appId={app.id}
                                size='text-xl'
                                className='absolute top-3 right-2'
                            />

                            <p className='font-medium text-lg'>
                                {app.name}
                            </p>

                            <div className='flex gap-2 p-2 items-start'>
                                <Button className='flex-1'>
                                    Run
                                </Button>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
