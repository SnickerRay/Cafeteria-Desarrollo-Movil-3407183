import { create } from 'zustand';

interface SavedStore {
  savedIds: number[];
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  isItemSaved: (id: number) => boolean;
  clearAll: () => void;
}

export const useSavedStore = create<SavedStore>((set, get) => ({
  savedIds: [],

  addItem: (id) => {
    if (get().savedIds.includes(id)) return;

    set((state) => ({
      savedIds: [...state.savedIds, id],
    }));
  },

  removeItem: (id) => {
    set((state) => ({
      savedIds: state.savedIds.filter(
        (savedId) => savedId !== id
      ),
    }));
  },

  isItemSaved: (id) => get().savedIds.includes(id),

  clearAll: () => {
    set({ savedIds: [] });
  },
}));
