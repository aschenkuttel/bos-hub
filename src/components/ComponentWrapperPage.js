import { VmComponent } from '@/components/vm/VmComponent';
import { MetaTags } from './MetaTags'
import AppNavigator from '@/components/AppNavigator';

export function ComponentWrapperPage(props) {
    return (
        <>
            {props.meta && <MetaTags {...props.meta} />}

            <div className='relative'>
                <AppNavigator />
                <VmComponent src={props.src} props={props.componentProps} />
            </div>
        </>
    );
}
