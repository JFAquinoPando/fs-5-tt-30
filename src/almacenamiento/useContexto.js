import { create } from 'zustand'

export const useStore = create((set) => ({
    productos: [],
    agregar: function (item) {
       set((state) => ({ productos: [...state.productos, item] }))
    },
    vaciar: function () {
        set((state) => ({
            productos: []
        }))
    }
}))

/* function Counter() {
    const { count, inc } = useStore()
    return (
        <div>
            <span>{count}</span>
            <button onClick={inc}>one up</button>
        </div>
    )
} */