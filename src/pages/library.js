import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { db } from '@/lib/firebase/init'
import { query, where, collection, getDocs, documentId } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useAuthStore } from '@/stores/auth'
import { useBookmarkStore } from '@/stores/bookmarks'
import { BaseCard, Card } from '@/components/Card'
import Bookmark from '@/components/Bookmark'
import Spinner from '@/components/Spinner'
import Rating from '@/components/Rating'

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
        return (
            <div className="flex-1">
                <Spinner />
            </div>
        )
    } else if (apps.length === 0) {
        return (
            <div className="flex-1">
                <p>Nothing bookmarked yet :(</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <BaseCard className="max-w-5xl grid grid-cols-4 justify-center gap-4 my-8">
                {apps.map((app) => {
                    return (
                        <Card key={app.name} padding="p-0">
                            <div className="relative">
                                <Image
                                    src={app.iconUrl}
                                    alt={app.name}
                                    width={200}
                                    height={200}
                                    className="aspect-square"
                                />
                                <Link
                                    href={`/app/${app.id}`}
                                    className="group absolute top-0 w-full h-full flex justify-center items-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
                                >
                                    <FontAwesomeIcon
                                        icon={faPlay}
                                        className="text-white/50 text-[75px] opacity-0 group-hover:opacity-100 transition-opacity"
                                    />
                                </Link>
                            </div>

                            <div className="flex justify-between p-2">
                                <p className="font-medium text-lg">{app.name}</p>

                                <Bookmark appId={app.id} size="text-xl" className="" />
                            </div>

                            <div className="flex justify-between p-2">
                                <Rating value={app.rating} />

                                <p className='text-gray-500'>
                                    Reviews
                                </p>
                            </div>
                        </Card>
                    )
                })}
            </BaseCard>
        </div>
    )
}
