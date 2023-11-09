import { VmComponent } from '@/components/vm/VmComponent'
import { MetaTags } from './MetaTags'
import 'bootstrap/dist/css/bootstrap.css'

export function ComponentWrapperPage(props) {
    return (
        <>
            {props.meta && <MetaTags {...props.meta} />}
            <VmComponent src={props.src} props={props.componentProps} />
        </>
    )
}
