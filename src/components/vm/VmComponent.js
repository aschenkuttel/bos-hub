import { useBosLoaderStore } from '@/stores/bos-loader'
import { useVmStore } from '@/stores/vm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export function VmComponent(props) {
    const { EthersProvider, ethersContext, Widget } = useVmStore()
    const redirectMapStore = useBosLoaderStore()

    if (!EthersProvider || !redirectMapStore.hasResolved) {
        return <FontAwesomeIcon icon={faSpinner} className='text-3xl animate-spin' />
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
