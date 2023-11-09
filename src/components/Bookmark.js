import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { doc, arrayUnion, runTransaction } from 'firebase/firestore'
import { db } from '@/lib/firebase/init'
import { useAuthStore } from '@/stores/auth'
import { useBookmarkStore } from '@/stores/bookmarks'

export default function Bookmark({ appId }) {
    const localBookmarks = useBookmarkStore((store) => store.bookmarks)
    const accountId = useAuthStore((store) => store.accountId)

    const bookmark = async () => {
        if (!accountId) return

        await runTransaction(db, async (transaction) => {
            const bookmarkRef = doc(db, 'bookmarks', accountId)
            const bookmarksDoc = await transaction.get(bookmarkRef)

            if (!bookmarksDoc.exists()) {
                await transaction.set(bookmarkRef, {
                    bookmarks: [appId],
                })
            } else {
                const bookmarksData = bookmarksDoc.data()
                const bookmarks = bookmarksData.bookmarks
                const bookmarkIndex = bookmarks.indexOf(appId)

                if (bookmarkIndex === -1) {
                    await transaction.update(bookmarkRef, {
                        bookmarks: arrayUnion(appId),
                    })
                } else {
                    await transaction.update(bookmarkRef, {
                        bookmarks: bookmarks.filter((bookmark) => bookmark !== appId),
                    })
                }
            }
        })
    }

    return (
        <button onClick={bookmark}>
            <FontAwesomeIcon
                icon={faBookmark}
                fixedWidth
                className={clsx(
                    'text-gray-300 hover:text-gray-700 text-xl',
                    localBookmarks.includes(appId) && 'text-purple-600'
                )}
                aria-hidden="true"
            />
        </button>
    )
}
