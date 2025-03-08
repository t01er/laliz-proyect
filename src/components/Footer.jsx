import React, { useEffect, useState } from 'react';
import logotipolaliz from '../assets/img/logotipolaliz.png';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch categories
        fetch('https://deone.org/api/endpoints/categories.php')
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setCategories(data.data);
                }
            })
            .catch((error) => console.error('Error fetching categories:', error));

        // Fetch products
        fetch('https://deone.org/api/endpoints/get_products_with_images.php')
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    setProducts(data.data.slice(0, 4)); // Limit to the first 4 products
                }
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <footer className="max-w-7xl m-auto my-20">
            <div className="flex md:flex-row flex-col items-start md:text-left p-10 gap-10 justify-between ">
                <div className="flex flex-col items-center md:items-start justify-center">
                    <img className="size-40 object-contain" src={logotipolaliz} alt="Logo Laliz" />
                    <p className="md:w-96 w-full  text-zinc-600">
                        En Laliz Muebles, transformamos espacios en hogares acogedores y funcionales.
                    </p>
                </div>

                <div className='flex gap-20' >
                    <div className="flex flex-col gap-4">
                        <h4 className="font-black text-rose-400 text-lg">Categorías</h4>
                        {categories.length > 0 ? (
                            categories.map((category, index) => (
                                <a
                                    key={index}
                                    className="hover:text-rose-400 duration-300 ease-out text-zinc-500"
                                    href={`/productos`}
                                >
                                    {category.nombre}
                                </a>
                            ))
                        ) : (
                            <p className="text-zinc-500">Cargando categorías...</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-black text-rose-400 text-lg">Productos Populares</h4>
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <a
                                    key={index}
                                    className="hover:text-rose-400 duration-300 ease-out text-zinc-500"
                                    href={`/productos`}
                                >
                                    {product.nombre}
                                </a>
                            ))
                        ) : (
                            <p className="text-zinc-500">Cargando productos...</p>
                        )}
                    </div>
                </div>

                <div className='flex gap-20' >
                    <div className="flex flex-col gap-4">
                        <h4 className="font-black text-rose-400 text-lg">Links</h4>
                        <Link className="hover:text-rose-400 duration-300 ease-out text-zinc-500" to="/">
                            Home
                        </Link>
                        <Link className="hover:text-rose-400 duration-300 ease-out text-zinc-500" to="/productos">
                            Productos
                        </Link>
                        <Link className="hover:text-rose-400 duration-300 ease-out text-zinc-500" to="/nosotros">
                            Sobre Nosotros
                        </Link>
                        <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="/login" >
                            Login
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-black text-rose-400 text-lg">Síguenos</h4>
                        <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="https://facebook.com">
                            Facebook
                        </a>
                        <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="https://instagram.com">
                            Instagram
                        </a>
                        <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="https://tiktok.com">
                            TikTok
                        </a>
                        <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="https://web.whatsapp.com">
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t-2 mt-20">
                <p className="py-3 text-xs text-zinc-500 md:text-left text-center">
                    © 2024 diseñado y programado por{' '}
                    <a className="underline" target='_blanck' href="https://deone.org">
                        DeOne
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}
