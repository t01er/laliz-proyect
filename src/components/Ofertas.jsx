import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';

export default function Ofertas() {
    const [promociones, setPromociones] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Limpia localStorage al recargar la página
        const handleUnload = () => {
            localStorage.removeItem('modalShown');
        };

        window.addEventListener('beforeunload', handleUnload);

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);

    useEffect(() => {
        // Verificar si el modal ya se mostró
        const modalShown = localStorage.getItem('modalShown');

        if (!modalShown) {
            // Fetch promociones desde la API
            fetch('https://deone.org/api/endpoints/get_promociones.php')
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === 'success' && data.data.length > 0) {
                        setPromociones(data.data);
                        setShowModal(true);
                        localStorage.setItem('modalShown', 'true'); // Marcar el modal como mostrado
                    }
                })
                .catch((error) => console.error('Error fetching the promotions:', error));
        }
    }, []);

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                setShowModal(false);
            }, 60000);
            return () => clearTimeout(timer);
        }
    }, [showModal]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const backdropVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modalVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, type: 'spring', stiffness: 120 },
        },
        exit: { scale: 0.5, opacity: 0, transition: { duration: 0.3 } },
    };

    return (
        <div>
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        className="fixed inset-0 bg-black/75 flex justify-center items-center z-50"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={backdropVariants}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-lg"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={modalVariants}
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute top-2 right-2 bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition z-[9000]"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                // navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                loop
                                spaceBetween={20}
                                slidesPerView={1}
                            >
                                {promociones.map((promocion, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative">
                                            <img
                                                src={promocion.image_promocion}
                                                alt={promocion.nombre}
                                                className="w-full h-[400px] object-contain"
                                            />
                                            <div className="absolute bottom-0 bg-black/50 text-white p-4 w-full">
                                                <h3 className="text-lg font-semibold">
                                                    {promocion.nombre}
                                                </h3>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
