import { useEffect, useState } from "react";
import { fetchProductos } from "../services/fetchProductos";

export function useProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProductos()
      .then(setProductos)
      .catch((e) => setError(e.message))
      .finally(() => setCargando(false));
  }, []);

  return { productos, cargando, error };
}