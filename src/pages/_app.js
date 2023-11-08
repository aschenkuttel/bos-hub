import dynamic from 'next/dynamic'
import { useBosLoaderInitializer } from '@/hooks/useBosLoaderInitializer'
import { useHashUrlBackwardsCompatibility } from '@/hooks/useHashUrlBackwardsCompatibility'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const VmInitializer = dynamic(() => import('../components/vm/VmInitializer').catch((error) => {
    console.log("VM INIT ERROR: ", error)
}), {
    ssr: false,
})

export default function App({ Component, pageProps }) {
    useBosLoaderInitializer()
    useHashUrlBackwardsCompatibility()

    return (
        <>
            <VmInitializer />
            <Component className={inter.className} {...pageProps} />
        </>
    )
}
