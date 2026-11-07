export default function ProductoCard({ producto, enCarrito, onAgregar }) {
  return (
    <div className={`card ${enCarrito ? "en-carrito" : ""}`}>
      <img src={producto.thumbnail} alt={producto.title} />
      <h4>{producto.title}</h4>
      <p className="categoria">{producto.category}</p>
      <p className="precio">$ {producto.price.toFixed(2)}</p>
      <button disabled={enCarrito} onClick={() => onAgregar(producto)}>
        {enCarrito ? "En el carrito" : "Agregar"}
      </button>
    </div>
  );
}