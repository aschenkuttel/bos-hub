import { useBosLoaderStore } from '@/stores/bos-loader'
import { useVmStore } from '@/stores/vm'

export function VmComponent(props) {
    const { EthersProvider, ethersContext, Widget } = useVmStore()
    const redirectMapStore = useBosLoaderStore()

    console.log(EthersProvider)
    console.log(redirectMapStore.hasResolved)

    if (!EthersProvider || !redirectMapStore.hasResolved) {
        return null // spinner
    }

    console.log("else")

    return (
        <EthersProvider value={ethersContext}>
            <Widget
                config={{
                    redirectMap: redirectMapStore.redirectMap,
                }}
                {...props}
            />
        </EthersProvider>
    )
}
