import { useAuthStore } from '@/stores/auth'
import Button from './Button'

export default function Connect({className}) {
    const signedIn = useAuthStore((store) => store.signedIn)
    const accountId = useAuthStore((store) => store.accountId)
    const requestSignInWithWallet = useAuthStore((store) => store.requestSignInWithWallet)

    const content = () => {
        const isUsername = accountId.includes('.')

        if (isUsername) {
            return accountId
        } else if (signedIn) {
            return accountId.substring(0, 6) + '...' + accountId.substring(accountId.length - 4)
        } else {
            return 'Connect'
        }
    }

    return (
        <Button size="lg" className={className} onClick={requestSignInWithWallet}>
            {content()}
        </Button>
    )
}
