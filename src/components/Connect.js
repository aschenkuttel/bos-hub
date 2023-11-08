import { useAuthStore } from '@/stores/auth'
import Button from './Button'

export default function Connect({className}) {
    const signedIn = useAuthStore((store) => store.signedIn)
    const accountId = useAuthStore((store) => store.accountId)
    const requestSignInWithWallet = useAuthStore((store) => store.requestSignInWithWallet)

    return (
        <Button size="lg" className={className} onClick={requestSignInWithWallet}>
            {signedIn ? accountId : 'Connect'}
        </Button>
    )
}
