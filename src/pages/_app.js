import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useBosLoaderInitializer } from '@/hooks/useBosLoaderInitializer'
import { useHashUrlBackwardsCompatibility } from '@/hooks/useHashUrlBackwardsCompatibility'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import '@/styles/globals.css'

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

    const pathName = usePathname()
    console.log('pathName: ', pathName)

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
