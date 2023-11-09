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
    const pathName = usePathname()

    useEffect(() => {
        return onSnapshot(doc(db, "bookmarks", "a0f47bb9dfd5f31ae4ec5576841f8e0f046383ce951d565b7a63c8384f664585"), (doc) => {
            console.log("Current data: ", doc.data());
            setBookmarks({ bookmarks: doc.data().bookmarks })
        });
    }, [])

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
