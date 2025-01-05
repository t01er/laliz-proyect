import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imgnotfound from '../assets/img/Image-not-found.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export default function SectionProducto() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mostrarSlider, setMostrarSlider] = useState(false);

    useEffect(() => {
        axios
            .get('https://deone.org/api/endpoints/get_products_with_images.php')
            .then((response) => {
                const productosConImagen = response.data.data.map((producto) => ({
                    ...producto,
                    imagen_principal: producto.imagenes && producto.imagenes.length > 0 ? producto.imagenes[0].nombre : null,
                }));
                setProductos(productosConImagen);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error al obtener productos:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        axios
            .get('https://deone.org/api/endpoints/categories.php')
            .then((response) => {
                setCategorias(response.data.data);
            })
            .catch((error) => {
                console.error('Error al obtener categorías:', error);
            });
    }, []);

    const productosFiltrados = categoriaSeleccionada === null
        ? productos
        : productos.filter((producto) => producto.id_categoria === categoriaSeleccionada);

    const handleCategoriaSeleccionada = (idCategoria) => {
        if (idCategoria === 'todos') {
            setCategoriaSeleccionada(null);
        } else {
            setCategoriaSeleccionada(idCategoria);
        }
    };

    const toggleSlider = () => {
        setMostrarSlider(!mostrarSlider); // Alterna entre mostrar y ocultar el slider
    };

    return (
        <section className="max-w-7xl m-auto ">
            <div className="flex md:flex-row flex-col gap-5 justify-between items-center">
                <div className="md:flex gap-1 items-center  hidden">
                    <span className="text-4xl font-black opacity-15">Productos</span>
                </div>

                <div className="md:flex hidden flex-wrap gap-2">
                    <button
                        onClick={() => handleCategoriaSeleccionada('todos')}
                        className={`py-2 px-5 font-bold text-sm ${categoriaSeleccionada === null ? 'text-rose-400 border rounded-full ' : 'text-zinc-400'}`}
                    >
                        Todos
                    </button>
                    {categorias.slice(0, 4).map((categoria) => (
                        <button
                            key={categoria.id_categoria}
                            onClick={() => handleCategoriaSeleccionada(categoria.id_categoria)}
                            className={`text-sm font-bold  ${categoriaSeleccionada === categoria.id_categoria
                                ? 'text-rose-400 border rounded-full py-2 px-5'
                                : 'text-zinc-400 py-2 px-5'
                                }`}
                        >
                            {categoria.nombre}
                        </button>
                    ))}

                </div>
            </div>
            <div className='flex items-center gap-5 justify-between px-4' >
                <div className="flex  items-center  md:hidden">
                    <span className="text-4xl font-black opacity-15">Productos</span>
                </div>
                <button onClick={toggleSlider} className="md:hidden block font-bold text-sm text-rose-400">
                    {mostrarSlider ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    )}
                </button>
            </div>
            <AnimatePresence>

                {mostrarSlider && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, y: -50 }}
                        className="mt-4 flex md:flex-row flex-col overflow-x-auto gap-2  md:hidden" >
                        <button
                            onClick={() => handleCategoriaSeleccionada('todos')}
                            className={`py-2 px-5 font-bold text-sm ${categoriaSeleccionada === null ? 'text-rose-400 border  ' : 'text-zinc-400'}`}
                        >
                            Todos
                        </button>
                        {categorias.map((categoria) => (
                            <button
                                key={categoria.id_categoria}
                                onClick={() => handleCategoriaSeleccionada(categoria.id_categoria)}
                                className={`py-2 px-5 font-bold text-sm ${categoriaSeleccionada === categoria.id_categoria
                                    ? 'text-rose-400 border '
                                    : 'text-zinc-400'
                                    }`}
                            >
                                {categoria.nombre}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <article className="py-10">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                    {loading ? (
                        <p>Cargando productos...</p>
                    ) : productosFiltrados.length > 0 ? (
                        productosFiltrados.map((producto) => (
                            <Link key={producto.id_producto} to={`/productos/${producto.id_producto}`}>
                                <motion.div
                                    className="py-2 px-5 "
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className='flex items-center justify-center' >
                                        <motion.img
                                            className="w-64 h-64 object-contain rounded-3xl "
                                            src={producto.imagen_principal || imgnotfound}
                                            alt={producto.nombre}
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-around">
                                        <div className='py-2' >
                                            <h3 className="text-lg text-zinc-500">{producto.nombre}</h3>
                                            <div className="flex gap-2 items-center">
                                                <p className="text-2xl font-black text-rose-400">S/{producto.precio}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="p-2 bg-pink-100 text-rose-500 rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-6"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))
                    ) : (
                        <p className='flex items-center justify-center'>No se encontraron productos para esta categoría.</p>
                    )}
                </div>
            </article>
        </section>
    );
}
