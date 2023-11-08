import { FastAuthWallet } from './wallet'

function invokeEscKey() {
    window.dispatchEvent(
        new KeyboardEvent('keydown', {
            altKey: false,
            code: 'Escape',
            ctrlKey: false,
            isComposing: false,
            key: 'Escape',
            location: 0,
            metaKey: false,
            repeat: false,
            shiftKey: false,
            which: 27,
            charCode: 0,
            keyCode: 27,
        })
    )
}

const fastAuth = async ({ logger, fastAuthWallet }) => {
    return {
        networkId() {
            return fastAuthWallet.networkId
        },
        getContractId() {
            return fastAuthWallet.getContractId()
        },

        async getAccount() {
            logger.log('getAccount is called')
            return fastAuthWallet.getAccount()
        },

        async getAccounts() {
            logger.log('FastAuth:account')
            return fastAuthWallet.getAccounts()
        },

        async switchAccount(id) {
            return await fastAuthWallet.switchAccount(id)
        },

        getAccountId() {
            logger.log('FastAuth:getAccountId')
            return fastAuthWallet.getAccountId()
        },

        async isSignedIn() {
            logger.log('isSignedIn is called')
            return await fastAuthWallet.isSignedIn()
        },

        async getAvailableBalance() {
            logger.log('FastAuth:isSignedIn')
            return await fastAuthWallet.getAvailableBalance()
        },

        async verifyOwner() {
            throw Error('fastAuthWallet:verifyOwner is deprecated')
        },

        async signIn() {
            invokeEscKey()
            logger.log('FastAuth:signIn')
            return await fastAuthWallet.signIn()
        },

        async signOut() {
            logger.log('FastAuth:signOut')
            return await fastAuthWallet.signOut()
        },

        async signAndSendTransaction(params) {
            return await fastAuthWallet.signAndSendTransaction(params)
        },

        async signAndSendTransactions(params) {
            logger.log('FastAuth:signAndSendTransactions', params)
            return await fastAuthWallet.signAndSendTransactions(params)
        },
    }
}

export function setupFastAuth({ deprecated = false, networkId, signInContractId, relayerUrl }) {
    return async () => {
        if (!signInContractId || !networkId) {
            console.warn(`fastAuthWallet: signInContractId, networkId, are required to use the fastAuthWallet.`)
            return null
        }

        const fastAuthWallet = new FastAuthWallet({
            signInContractId,
            networkId,
            relayerUrl,
        })

        const accountCreationData = JSON.parse(
            window.localStorage.getItem('fast-auth:account-creation-data') || JSON.stringify({})
        )
        const shouldSignIn = !!accountCreationData.isCreated

        return {
            id: 'fast-auth',
            type: 'instant-link',
            metadata: {
                name: 'Fast Auth',
                description: null,
                iconUrl:
                    'data:image/png;base64,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',
                deprecated,
                available: true,
                contractId: signInContractId,
                runOnStartup: shouldSignIn,
            },
            init: (options) => {
                return fastAuth({
                    ...options,
                    fastAuthWallet,
                })
            },
        }
    }
}
