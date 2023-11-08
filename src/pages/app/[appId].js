
import { useBosComponents } from '@/hooks/useBosComponents';
import { ComponentWrapperPage } from '@/components/ComponentWrapperPage';

export default function App() {
    const components = useBosComponents()

    return (
        <div>
            <ComponentWrapperPage src={components.home} />
        </div>
    )
}