import React from 'react'
import banner from '../assets/img/banner.png'
import banneratras from '../assets/img/banneratras.jpg'
import bgfondo from '../assets/img/bgfondo.jpg'
import logotipolaliz from '../assets/img/logotipolaliz.png'
import camas from '../assets/img/camas.webp'
import mesa1 from '../assets/img/mesa1.png'
import mesa2 from '../assets/img/mesa2.png'
import mesa3 from '../assets/img/mesa3.png'
import SectionProducto from '../components/SectionProducto'
import Ofertas from '../components/Ofertas'
import { motion } from 'framer-motion'
export default function Inicio() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    return (
        <>
            <Ofertas />
            <header>
                <div className="max-w-7xl m-auto relative">
                    <motion.div
                        className="md:flex-row flex-col flex items-start gap-10 px-4 md:px-0"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div className="flex-1 flex gap-4 flex-col " variants={fadeInLeft}>
                            <h2 className="md:text-7xl text-5xl md:text-left text-left font-black text-rose-400 text-balance  md:p-0">
                                ENCUENTRA TU MUEBLE PERFECTO
                            </h2>
                            <p className="md:text-lg text-base  text-zinc-600 md:text-left text-left">
                                Nuestro compromiso: calidad, diseño y satisfacción.
                            </p>
                            <div className="flex items-center md:justify-start justify-start  gap-4">
                                <a className="border border-rose-200 py-2 px-10 rounded-full text-rose-400" href="#">
                                    Ver Video
                                </a>
                                <a className="w-10 h-10 items-center flex justify-center rounded-full bg-white shadow-md" href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/51925948034?text=Hola%20Muebles%20Laliz,%20estoy%20interesado%20en%20sus%20productos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-500" >
                                    Contactar Ahora
                                </a>

                            </div>
                            {/* <motion.div
                                initial={{ opacity: 0, visibility: 'hidden' }}
                                animate={{ opacity: 1, visibility: 'visible' }}
                                transition={{ duration: 3 }}
                                className="md:flex hidden gap-20 border p-8 items-center rounded-full shadow-md w-[80%] md:absolute relative bottom-5 bg-white"
                            >
                                <div>
                                    <h4 className="text-zinc-700 font-bold">Confort</h4>
                                    <div className="flex items-center gap-1 text-zinc-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-rose-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        Cozy seating
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-zinc-700 font-bold" >Quality Assurance</h4>
                                    <div className="flex items-center gap-1 text-zinc-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-rose-500">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                                        </svg>
                                        Cozy seating
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-zinc-700 font-bold" >Free Shiping</h4>
                                    <div className="flex items-center gap-1 text-zinc-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-rose-500">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                        </svg>
                                        Cozy seating
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-zinc-700 font-bold" >Secure checkout</h4>
                                    <div className="flex items-center gap-1 text-zinc-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-rose-500">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                        </svg>
                                        Cozy seating
                                    </div>
                                </div>
                                <div>
                                    <a className="border py-2 px-10 rounded-full text-sm text-rose-400" href="">Ver Mas</a>
                                </div>
                            </motion.div> */}

                        </motion.div>

                        <motion.div className="w-full" variants={fadeInUp}>
                            <img className="w-full rounded-3xl" src={banner} alt="Mueble" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* <div className="max-w-7xl m-auto px-4 md:px-0">
                    <motion.div
                        className="flex items-center flex-wrap justify-center gap-20 my-20 text-xl text-zinc-500"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span className="font-bold" variants={fadeInUp}>
                            Lowe's
                        </motion.span>
                        <motion.span variants={fadeInUp}>DeWalt</motion.span>
                        <motion.span variants={fadeInUp}>Home Deport</motion.span>
                        <motion.span className="font-black" variants={fadeInUp}>
                            IKEA
                        </motion.span>
                        <motion.span className="font-black" variants={fadeInUp}>
                            Makita
                        </motion.span>
                        <motion.span className="font-black" variants={fadeInUp}>
                            3M
                        </motion.span>
                    </motion.div>
                </div> */}
            </header>
            <main>
                {/* <section className="max-w-7xl m-auto my-20 ">
                    <div className="flex md:flex-row flex-col p-2 gap-5 justify-center ">
                        <article className=" relative bg-rose-50 flex w-full px-10  justify-center items-center rounded-xl">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold text-zinc-700 ">Dining Tables</h2>
                                <button className="hover:scale-2 py-2 text-sm font-bold px-5 border-rose-500 border rounded-full text-rose-400">See
                                    More</button>
                            </div>
                            <div>
                                <img className="w-[200px] h-[200px] object-contain" src={mesa1} alt="" />
                            </div>
                        </article>
                        <article className=" relative bg-rose-50 flex w-full px-10 justify-center items-center rounded-xl">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold text-zinc-700 ">Dining Tables</h2>
                                <button className="hover:scale-2 py-2 text-sm font-bold px-5 border-rose-500 border rounded-full text-rose-400">See
                                    More</button>
                            </div>
                            <div>
                                <img className="w-[200px] h-[200px] object-contain" src={mesa2} alt="" />
                            </div>
                        </article>
                        <article className=" relative bg-rose-50 flex w-full px-10 justify-center items-center rounded-xl">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-bold text-zinc-700 ">Dining Tables</h2>
                                <button className="hover:scale-2 py-2 text-sm font-bold px-5 border-rose-500 border rounded-full text-rose-400">See
                                    More</button>
                            </div>
                            <div>
                                <img className="w-[200px] h-[200px] object-contain" src={mesa3} alt="" />
                            </div>
                        </article>
                    </div>
                </section> */}
                <SectionProducto />
                <motion.section
                    className="max-w-7xl m-auto my-20"
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                >
                    <motion.div className="flex md:flex-row flex-col p-2 gap-10">
                        <motion.div className="flex flex-col gap-7" variants={fadeInUp}>
                            <div className="flex gap-1 items-center">
                                <motion.span
                                    className="text-4xl font-black opacity-15"
                                    variants={fadeInUp}
                                >
                                    Nosotros
                                </motion.span>
                            </div>
                            <motion.div variants={fadeInUp}>
                                <p className="text-zinc-600">
                                    En Laliz Muebles, transformamos espacios en hogares acogedores y funcionales. Con una amplia
                                    variedad de muebles de alta calidad y diseños modernos, nos dedicamos a ofrecer soluciones que se
                                    adaptan a tus necesidades y reflejan tu estilo único. Nuestro compromiso es brindarte productos
                                    duraderos y atención personalizada para que cada compra sea una experiencia satisfactoria.
                                </p>
                            </motion.div>

                            <motion.div className="flex flex-col gap-5" variants={staggerContainer}>
                                <motion.div className="flex items-center gap-2 font-bold" variants={fadeInUp}>
                                    <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-rose-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-rose-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <p className="text-rose-400">Diseños Exclusivos</p>
                                </motion.div>

                                <motion.div className="flex items-center gap-2 font-bold" variants={fadeInUp}>
                                    <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-rose-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-rose-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <p className="text-rose-400">Calidad Garantizada</p>
                                </motion.div>

                                <motion.div className="flex items-center gap-2 font-bold" variants={fadeInUp}>
                                    <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-rose-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-rose-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <p className="text-rose-400">Atención Personalizada</p>
                                </motion.div>

                                <motion.a className="py-2 px-5 bg-rose-50 w-fit rounded-full text-rose-500" href="" variants={fadeInUp}>
                                    Comprar Ahora
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        <motion.div className="relative" variants={fadeInUp}>
                            <img className="rounded-3xl" src={bgfondo} alt="" />
                            <div className="flex items-center gap-2 absolute bottom-0 bg-white rounded-2xl p-5 right-0 m-2">
                                <div className="border border-rose-400 rounded-full w-10 h-10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-rose-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                </div>
                                <span className="text-zinc-700 font-light">Nosotras pensamos en todos los detalles</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>
                <section className="bg-zinc-100 py-20 ">
                    <div className="max-w-7xl m-auto p-2">
                        <div className="flex items-center flex-col justify-center gap-5">
                            <h3 className="text-4xl font-black text-center text-rose-400">Muebles que Inspiran, Diseñados para Ti
                            </h3>
                            <p className="text-center text-zinc-600">Transforma tu hogar con muebles únicos y funcionales.
                                Encuentra diseño, calidad y confort en cada pieza. ¡Tu espacio, tu estilo</p>
                            <a className="py-2 px-5 rounded-full border text-rose-500" href="">Comprar Ahora</a>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
