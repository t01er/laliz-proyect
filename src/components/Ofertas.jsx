import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Ofertas() {
    const [promocion, setPromocion] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('https://deone.org/api/endpoints/get_promociones.php')
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success' && data.data.length > 0) {
                    setPromocion(data.data[0]);
                    setShowModal(true);
                }
            })
            .catch((error) => console.error('Error fetching the promotion:', error));
    }, []);

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                setShowModal(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [showModal]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <AnimatePresence>
                {showModal && promocion && (
                    <motion.div
                        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-10"
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="bg-rose-100 p-1 rounded-lg shadow-lg w-[700px] relative ">
                            <div className="absolute top-0 right-0 p-2">
                                <button
                                    onClick={handleCloseModal}
                                    className=" text-xl bg-white/25 text-white m-1 p-1 rounded-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <img
                                src={promocion.image_promocion}
                                alt={promocion.nombre}
                                className="w-full object-cover rounded"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
