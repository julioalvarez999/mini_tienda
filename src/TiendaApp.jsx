import { useState } from "react";
import { useProductos } from "./hooks/useProductos";
import ProductoList from "./components/ProductoList";
import CarritoPanel from "./components/CarritoPanel";

export default function TiendaApp() {
  const { productos, cargando, error } = useProductos();
  const [carrito, setCarrito] = useState([]);

  const agregar = (producto) => {
    if (carrito.some((p) => p.id === producto.id)) return;
    setCarrito([...carrito, producto]);
  };
  const quitar = (id) => setCarrito(carrito.filter((p) => p.id !== id));
  const vaciar = () => setCarrito([]);
  const total = carrito.reduce((suma, p) => suma + p.price, 0);

  return (
    <>
      <h1>Mini Tienda</h1>
      {cargando && <p className="mensaje">Cargando...</p>}
      {error && <p className="mensaje error">Error: {error}</p>}
      {!cargando && !error && (
        <div className="layout">
          <ProductoList productos={productos} carrito={carrito} onAgregar={agregar} />
          <CarritoPanel carrito={carrito} total={total} onQuitar={quitar} onVaciar={vaciar} />
        </div>
      )}
    </>
  );
}