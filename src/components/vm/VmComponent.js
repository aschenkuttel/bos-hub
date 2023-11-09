import { useBosLoaderStore } from '@/stores/bos-loader'
import { useVmStore } from '@/stores/vm'
import Spinner from '@/components/Spinner'

export function VmComponent(props) {
    const { EthersProvider, ethersContext, Widget } = useVmStore()
    const redirectMapStore = useBosLoaderStore()

    if (!EthersProvider || !redirectMapStore.hasResolved) {
        return <Spinner />
    }

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
