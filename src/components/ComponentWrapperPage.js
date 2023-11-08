import { VmComponent } from '@/components/vm/VmComponent';
import { MetaTags } from './MetaTags'

export function ComponentWrapperPage(props) {
    return (
        <>
            {props.meta && <MetaTags {...props.meta} />}

            <div className='p-4'>
                <VmComponent src={props.src} props={props.componentProps} />
            </div>
        </>
    );
}
