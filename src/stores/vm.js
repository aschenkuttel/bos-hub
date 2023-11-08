import { create } from 'zustand'

export const useVmStore = create((set) => ({
    cache: null,
    CommitButton: null,
    ethersContext: null,
    EthersProvider: null,
    Widget: null,
    near: null,
    set: (params) => set(() => ({ ...params })),
}))
