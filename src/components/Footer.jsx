import React from 'react'
import logotipolaliz from '../assets/img/logotipolaliz.png'
export default function Footer() {
    return (
        <footer className="max-w-7xl m-auto my-20 ">
            <div className="flex md:flex-row flex-col items-center md:text-left text-center gap-2 justify-between ">
                <div className="flex flex-col items-center md:items-start justify-center">
                    <img className="size-40 object-contain" src={logotipolaliz} alt="" />
                    <p className="w-96 p-2 text-zinc-600">En Laliz Muebles, transformamos espacios en hogares acogedores y funcionales.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-black text-rose-400 text-lg">Categorias</h4>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Camas</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Roperos</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Comedores</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Sofas</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-black text-rose-400 text-lg">Popular Product</h4>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Sofa Moderno</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Cama 2pz</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Silla Caoba</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Sofa Cama</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-black text-rose-400 text-lg">Links</h4>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Home</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Productos</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Sobre Nosotros</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-black text-rose-400 text-lg">Siguenos</h4>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Facebook</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">Instagram</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">TikTok</a>
                    <a className="hover:text-rose-400 duration-300 ease-out text-zinc-500" href="">WhatsApp</a>
                </div>
            </div>
            <div className="border-t-2 mt-20 ">
                <p className="py-3 text-xs text-zinc-500 md:text-left text-center  ">© 2024 diseñado y programado por <a
                    className="underline" href="">DeOne</a>.
                </p>
            </div>
        </footer>
    )
}
