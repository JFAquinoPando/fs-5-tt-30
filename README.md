# Clase 30: Rutas Dinámicas, Parámetros, Estado Global con Zustand y SweetAlert2

Proyecto práctico desarrollado con **React**, **Vite**, **React Router DOM**, **Zustand** y **SweetAlert2**, simulando una tienda en línea con catálogo de productos, vista de detalle dinámico y carrito de compras persistente a nivel de estado global.

---

## 🚀 Inicio Rápido

1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
3. **Generar compilación para producción:**
   ```bash
   npm run build
   ```

---

## 📚 Conceptos Vistos en la Clase

### 1. Enrutamiento con React Router DOM
Se utilizó `react-router-dom` (v5) para estructurar la navegación Single Page Application (SPA) sin recargas de página:

- **`BrowserRouter` (alias `Enrutador`)**: Envuelve la aplicación y sincroniza la UI con la URL.
- **`Switch`**: Renderiza exclusivamente la primera ruta `<Route>` que coincida con la ruta actual.
- **`Link`**: Componente de navegación para transiciones fluidas sin recargar el navegador.

```jsx
// src/Aplicacion.jsx
<Enrutador>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contacto" component={Contacto} />
    <Route exact path="/producto/:id" component={Publicacion} />
    <Route exact path="/carrito" component={Carrito} />
  </Switch>
</Enrutador>
```

---

### 2. Parámetros de Ruta (`useParams`)
Permite capturar segmentos variables en la URL para renderizar vistas de detalle basadas en identificadores:

- **Definición de ruta dinámica:** `:id` como placeholder en `<Route exact path="/producto/:id">`.
- **Lectura del parámetro:** Con el hook `useParams()` dentro del componente consumidor.

```jsx
// src/paginas/Publicacion.jsx
import { useParams } from "react-router-dom";

export function Publicacion() {
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProducto(data));
  }, [id]);

  // ...
}
```

---

### 3. Estado Global con Zustand (`useStore`)
Gestión centralizada del estado del carrito de compras sin *prop drilling* ni boilerplate excesivo:

- **`create((set) => ({ ... }))`**: Crea un custom hook reactivo listo para ser consumido por cualquier componente.
- **Inmutabilidad estricta**: Al agregar elementos, se evita mutar el arreglo original con `push()`; en su lugar se genera una nueva referencia usando el operador de propagación (*spread operator*):

```javascript
// src/almacenamiento/useContexto.js
import { create } from 'zustand';

export const useStore = create((set) => ({
  productos: [],

  // ✅ Inmutable: retorna un nuevo array con el elemento añadido
  agregar: (item) => set((state) => ({ 
    productos: [...state.productos, item] 
  })),

  // Vaciar carrito tras concretar la orden
  vaciar: () => set({ productos: [] })
}));
```

- **Consumo en componentes:**
```jsx
// Leer estado o disparar acciones
const { productos, agregar, vaciar } = useStore();
```

---

### 4. Notificaciones y Modales con SweetAlert2
Reemplazo moderno de `window.alert()` y `window.confirm()` para una experiencia de usuario profesional:

- **Confirmación interactiva (`Swal.fire` con Promesas):**
```jsx
// src/paginas/Publicacion.jsx
Swal.fire({
  title: "¿Quieres agregar al carrito?",
  text: `Estás por agregar ${producto.titulo}`,
  icon: "question",
  showDenyButton: true,
  confirmButtonText: "Sí, agregar",
  denyButtonText: "No"
}).then((result) => {
  if (result.isConfirmed) {
    agregar(producto);
    Swal.fire("¡Agregado!", "El producto está en tu carrito.", "success");
  } else if (result.isDenied) {
    Swal.fire("Cancelado", "No se agregó ningún producto.", "info");
  }
});
```

- **Notificación de compra finalizada:**
```jsx
// src/paginas/Carrito.jsx
Swal.fire({
  title: "Gracias por su compra",
  text: `¡Orden procesada por $${total.toFixed(2)}!`,
  icon: "success"
}).then(() => {
  vaciar();
});
```

---

## 🗂️ Estructura del Proyecto

```text
src/
├── almacenamiento/
│   └── useContexto.js       # Store global de Zustand (productos, agregar, vaciar)
├── assets/                  # Íconos y recursos visuales
├── componentes/
│   ├── Menu.jsx             # Barra de navegación con contador dinámico de carrito
│   └── Tarjeta.jsx          # Card individual de producto para el catálogo
├── css/
│   └── estilos.css          # Estilos globales y responsive de la aplicación
├── paginas/
│   ├── Carrito.jsx          # Lista de compra, resumen y cálculo de total
│   ├── Contacto.jsx         # Formulario de contacto y panel de información
│   ├── Home.jsx             # Catálogo principal conectado a FakeStore API
│   └── Publicacion.jsx      # Vista de detalle con useParams y SweetAlert2
├── Aplicacion.jsx           # Enrutador principal y declaración de rutas
└── main.jsx                 # Punto de entrada de la aplicación React
```

---

## ✅ Resumen de Conceptos Clave

| Concepto | Herramienta | Utilidad Principal |
| :--- | :--- | :--- |
| **Navegación SPA** | `react-router-dom` | Cambio de vistas sin recarga del documento HTML. |
| **Parámetros dinámicos** | `useParams()` | Obtener variables de la URL (ej: `:id` de un producto). |
| **Estado global liviano** | `zustand` | Compartir estado (carrito) entre componentes sin Context API pesado. |
| **Inmutabilidad** | Spread Operator (`[...]`) | Garantizar que React detecte los cambios de estado en arrays y objetos. |
| **Modales de feedback** | `sweetalert2` | Diálogos asíncronos y atractivos basados en Promesas. |
