import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import imgnotfound from '../assets/img/Image-not-found.png';

export default function ProductDetails() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const [imagenPrincipal, setImagenPrincipal] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://deone.org/api/endpoints/get_one_product_with_images.php?id_producto=${id}`
        );
        const data = response.data.data;
        setProducto(data);
        setImagenPrincipal(data.imagenes?.[0]?.url || imgnotfound);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar el producto');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleIncrement = () => setCantidad(cantidad + 1);
  const handleDecrement = () => cantidad > 1 && setCantidad(cantidad - 1);
  const handleImageClick = (url) => setImagenPrincipal(url);


  const handleAgregarAlCarrito = () => {
    if (cantidad > producto.stock) {
      alert(`No puedes agregar más de ${producto.stock} unidades al carrito.`);
      return;
    }
  
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    const productoEnCarrito = carrito.find(item => item.id === producto.id_producto);
  
    if (productoEnCarrito) {
      const nuevaCantidad = productoEnCarrito.cantidad + cantidad;
  
      if (nuevaCantidad > producto.stock) {
        alert(`No puedes agregar más de ${producto.stock} unidades en total.`);
        return;
      }
  
      productoEnCarrito.cantidad = nuevaCantidad;
    } else {
      carrito.push({
        id: producto.id_producto,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
        imagen: producto.imagenes[0]?.url || imgnotfound
      });
    }
  
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
    alert('Producto agregado al carrito');
  };
  
  const handlePedirWhatsApp = () => {
    const mensaje = `Hola, quiero pedir el producto: ${producto.nombre} (Cantidad: ${cantidad}). Total: S/${producto.precio * cantidad}. Puedes ver más detalles aquí: https://muebleslaliz.com/productos/${producto.id_producto}`;
    const telefonoWhatsApp = "51935874138";
    const url = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };


  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {loading ? (
          <p>Cargando producto...</p>
        ) : error ? (
          <p>{error}</p>
        ) : !producto ? (
          <p>No se encontró el producto.</p>
        ) : (
          <>

            <div className="lg:w-1/2 w-full">
              <img
                className="w-full h-96 object-contain rounded-lg"
                src={imagenPrincipal}
                alt="Imagen principal"
              />
            </div>


            <div className="lg:w-1/2 w-full">
              <h2 className="text-4xl font-bold mb-4">{producto.nombre}</h2>
              <p className="text-lg text-gray-500 mb-4">{producto.descripcion}</p>
              <p className="text-2xl font-semibold text-rose-500 mb-4">S/{producto.precio}</p>
              <p className="text-lg text-gray-400 mb-4">Stock disponible: {producto.stock}</p>


              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Colores disponibles:</h3>
                <div className="flex gap-3">
                  {producto.imagenes &&
                    producto.imagenes.map((imagen, index) => (
                      <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => handleImageClick(imagen.url)}
                      >
                        <img
                          className="w-16 h-16 object-cover rounded-lg border border-gray-200 hover:border-rose-500"
                          src={imagen.url}
                          alt={imagen.nombre}
                        />
                        <p className="text-center text-sm text-gray-500 mt-1">
                          Color: {imagen.nombre}
                        </p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={handleDecrement}
                  className="bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>

                </button>
                <span className="text-lg font-bold">{cantidad}</span>
                <button
                  onClick={handleIncrement}
                  className="bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>


                </button>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={handleAgregarAlCarrito} className="bg-rose-500 text-white py-3 px-6 rounded-lg hover:bg-rose-600 transition duration-300">
                  Agregar al carrito
                </button>
                <button onClick={handlePedirWhatsApp} className="border border-rose-500 text-rose-500 py-3 px-6 rounded-lg hover:bg-rose-600 hover:text-white transition duration-300">
                  Pedir al WhatsApp
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
