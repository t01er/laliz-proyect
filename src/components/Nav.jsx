import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logotipolaliz from '../assets/img/logotipolaliz.png';
import facebook from '../assets/img/facebook.svg';
import ig from '../assets/img/ig.svg';
import sap from '../assets/img/sap.svg';
import tiktok from '../assets/img/tiktok.svg';
import { AnimatePresence, motion } from 'framer-motion';
export default function Nav() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl m-auto hidden  md:flex items-center justify-between my-2 border-b py-4">
        <div className="flex items-center gap-5 text-zinc-500">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +51 999 999 999
          </span>

          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            laliz@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-6">
          <div><img className="h-6 w-6" src={facebook} alt="" /></div>
          <div><img className="h-6 w-6" src={tiktok} alt="" /></div>
          <div><img className="h-6 w-6" src={sap} alt="" /></div>
          <div><img className="h-6 w-6" src={ig} alt="" /></div>
        </div>
      </div>

      <div>
        <nav className="flex items-center justify-between max-w-7xl m-auto">
          <div>
            <img className="w-24 h-24 object-contain" src={logotipolaliz} alt="" />
          </div>

          <div className="items-center gap-6 md:flex hidden">
            <div>
              <Link
                to="/"
                className={isActive('/') ? 'text-rose-500 font-bold' : 'text-gray-500'}
              >
                Inicio
              </Link>
            </div>
            <div>
              <Link
                to="/productos"
                className={isActive('/productos') ? 'text-rose-500 font-bold' : 'text-gray-500'}
              >
                Productos
              </Link>
            </div>
            <div>
              <Link
                to="/nosotros"
                className={isActive('/nosotros') ? 'text-rose-500 font-bold' : 'text-gray-500'}
              >
                Nosotros
              </Link>
            </div>
            <div className="flex gap-1">
              <div>
                <Link
                  className={isActive('/carrito') ? 'text-rose-500 font-bold' : 'text-gray-500'}
                  to={"/carrito"}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center p-4 gap-2">
            <Link to="/carrito" className="text-rose-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-rose-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 5h18M3 12h18M3 19h18" />
              </svg>
            </button>
          </div>
        </nav>
        <AnimatePresence>

          {menuOpen && (

            <>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -50 }}

                className='px-5' >
                <div className="md:hidden flex flex-col gap-6 mt-4 ">
                  <Link
                    to="/"
                    className={isActive('/') ? 'text-rose-500 font-bold' : 'text-gray-500'}
                    onClick={() => setMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    to="/productos"
                    className={isActive('/productos') ? 'text-rose-500 font-bold' : 'text-gray-500'}
                    onClick={() => setMenuOpen(false)}
                  >
                    Productos
                  </Link>
                  <Link
                    to="/nosotros"
                    className={isActive('/nosotros') ? 'text-rose-500 font-bold' : 'text-gray-500'}
                    onClick={() => setMenuOpen(false)}
                  >
                    Nosotros
                  </Link>
                  {/* <Link to="/carrito" className={isActive('/nosotros') ? 'text-rose-500  font-bold' : 'text-gray-500'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </Link> */}
                </div>
                <div className="max-w-7xl m-auto md:flex-row flex-col flex items-start md:hidden gap-5 justify-between my-2 border-b py-4">
                  <div className="flex md:flex-row flex-col items-center gap-5 text-zinc-500">
                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                      +51 999 999 999
                    </span>

                    <span className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                      laliz@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div><img className="h-6 w-6" src={facebook} alt="" /></div>
                    <div><img className="h-6 w-6" src={tiktok} alt="" /></div>
                    <div><img className="h-6 w-6" src={sap} alt="" /></div>
                    <div><img className="h-6 w-6" src={ig} alt="" /></div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence >
      </div >

    </>
  );
}
