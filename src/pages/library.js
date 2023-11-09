import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase/init'
import { doc, getDoc } from 'firebase/firestore'
import { useAuthStore } from '@/stores/auth'

export default function Library() {
    const [loading, setLoading] = useState(false)
    const accountId = useAuthStore((store) => store.accountId)

    useEffect(() => {
        if (!accountId) return

        const docRef = doc(db, 'bookmarks', accountId)

        getDoc(docRef).then((doc) => {
            console.log(doc.data())
        }).catch((error) => {
            console.log(error)
        })
    }, [accountId])

    if (loading) {
        return <div className="flex-1">Loading...</div>
    } else {
        return <div className="flex-1">Lib</div>
    }
}
