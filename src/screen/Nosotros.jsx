import React from 'react';
import { motion } from 'framer-motion';
import bgfondo from '../assets/img/bgfondo.jpg';

export default function Nosotros() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeInOut' }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className="max-w-7xl m-auto "
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
  );
}
