import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useBosLoaderInitializer } from '@/hooks/useBosLoaderInitializer'
import { useHashUrlBackwardsCompatibility } from '@/hooks/useHashUrlBackwardsCompatibility'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { db } from '@/lib/firebase/init'
import { doc, onSnapshot } from 'firebase/firestore'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import '@near-wallet-selector/modal-ui/styles.css'
import '@/styles/globals.css'
import { useEffect } from 'react';
import { useBookmarkStore } from '@/stores/bookmarks';
import { useAuthStore } from '@/stores/auth';

const inter = Inter({ subsets: ['latin'] })

const VmInitializer = dynamic(
    () =>
        import('../components/vm/VmInitializer').catch((error) => {
            console.log('VM INIT ERROR: ', error)
        }),
    {
        ssr: false,
    }
)

export default function App({ Component, pageProps }) {
    useBosLoaderInitializer()
    useHashUrlBackwardsCompatibility()
    const setBookmarks = useBookmarkStore((store) => store.set)
    const accountId = useAuthStore((store) => store.accountId)
    const pathName = usePathname()

    useEffect(() => {
        if (!accountId) {
            setBookmarks({ bookmarks: [] })
            return
        }

        return onSnapshot(doc(db, "bookmarks", accountId), (doc) => {
            setBookmarks({ bookmarks: doc.data().bookmarks })
        });
    }, [accountId]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <VmInitializer />
            <main className="min-h-screen flex flex-col justify-center items-center">
                {pathName !== null && !pathName.startsWith('/app') && <Header />}
                <Component className={inter.className} {...pageProps} />
            </main>
        </>
    )
}
