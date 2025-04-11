import { create } from 'zustand';

const useStore = create((set) => ({
    state: 'started',
    action: () => set({state: 'current'}),
}));