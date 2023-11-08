import { useAuthStore } from '@/stores/auth'
import Button from './Button'

export default function Connect() {
    const signedIn = useAuthStore((store) => store.signedIn)
    const accountId = useAuthStore((store) => store.accountId)
    const requestSignInWithWallet = useAuthStore((store) => store.requestSignInWithWallet)

    return (
        <Button size="lg" onClick={requestSignInWithWallet}>
            {signedIn ? accountId : 'Connect'}
        </Button>
    )
}
