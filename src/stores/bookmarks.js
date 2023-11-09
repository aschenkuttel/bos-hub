import { create } from 'zustand'

export const useBookmarkStore = create((set) => ({
    bookmarks: [],
    set: (state) => set((previousState) => ({ ...previousState, ...state })),
}))
