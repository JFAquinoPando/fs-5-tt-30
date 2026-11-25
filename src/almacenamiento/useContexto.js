import { create } from 'zustand'

export const useStore = create((set) => ({
    productos: [],
    agregar: function (item) {
       return set((state) => ({ productos: state.productos.push(item) }))
    },
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