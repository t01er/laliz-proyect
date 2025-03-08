import React, { useState, useEffect } from 'react';

export default function Carrito() {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [telefono, setTelefono] = useState('');
    const [metodoPago, setMetodoPago] = useState(1);

    useEffect(() => {
        const carritoStorage = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(carritoStorage);
        calcularTotal(carritoStorage);
    }, []);

    useEffect(() => {
        if (telefono.length === 9) { 
            fetch(`https://deone.org/api/endpoints/get_user_by_phone.php?phone=${telefono}`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === "success") {
                        const { nombre, apellido, correo, direccion, ciudad } = data.data;
                        setNombre(nombre || '');
                        setApellido(apellido || '');
                        setCorreo(correo || '');
                        setDireccion(direccion || '');
                        setCiudad(ciudad || '');
                    } else {
                        setNombre('');
                        setApellido('');
                        setCorreo('');
                        setDireccion('');
                        setCiudad('');
                    }
                })
                .catch(error => {
                    console.error('Error al obtener los datos del usuario:', error);
                });
        } else {
           
            setNombre('');
            setApellido('');
            setCorreo('');
            setDireccion('');
            setCiudad('');
        }
    }, [telefono]); 

    const calcularTotal = (carrito) => {
        const totalCarrito = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        setTotal(totalCarrito);
    };

    const handleIncrement = (id) => {
        const nuevoCarrito = carrito.map((item) => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            return item;
        });
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        calcularTotal(nuevoCarrito);
    };

    const handleDecrement = (id) => {
        const nuevoCarrito = carrito.map((item) => {
            if (item.id === id && item.cantidad > 1) {
                item.cantidad -= 1;
            }
            return item;
        });
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        calcularTotal(nuevoCarrito);
    };

    const handleRemove = (id) => {
        const nuevoCarrito = carrito.filter((item) => item.id !== id);
        setCarrito(nuevoCarrito);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
        calcularTotal(nuevoCarrito);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Validar campos requeridos
        if (!telefono || !nombre || !apellido || !correo || !direccion || !ciudad || carrito.length === 0) {
            alert('Por favor, completa todos los campos requeridos y asegúrate de que el carrito no esté vacío.');
            return;
        }
    
        const detalles = carrito.map((item) => ({
            id_producto: item.id,
            cantidad: item.cantidad,
            precio_unitario: item.precio,
            subtotal: item.precio * item.cantidad,
            descuento: 0.00,
        }));
    
        const data = {
            telefono,
            nombre_usuario: nombre,
            apellido_usuario: apellido,
            correo_usuario: correo,
            direccion,
            ciudad,
            id_metodo_pago: metodoPago,
            detalles,
        };
    
        fetch('https://deone.org/api/endpoints/register_sale.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Pedido enviado:', result);
    
                // Limpiar el carrito y los campos solo si el pedido se envía correctamente
                setCarrito([]);
                localStorage.removeItem('carrito');
                setTotal(0);
                setNombre('');
                setApellido('');
                setCorreo('');
                setDireccion('');
                setCiudad('');
                setTelefono('');
                setMetodoPago(1);
            })
            .catch(error => {
                console.error('Error al enviar pedido:', error);
            });
    };
    

    const handleRedirectWhatsApp = (e) => {
        e.preventDefault();
    
        // Validar que los campos requeridos estén completos
        if (!telefono || !nombre || !apellido || !correo || !direccion || !ciudad || carrito.length === 0) {
            alert('Por favor, completa todos los campos requeridos y asegúrate de que el carrito no esté vacío.');
            return;
        }
    
        const detalles = carrito.map((item) => ({
            id_producto: item.id,
            cantidad: item.cantidad,
            precio_unitario: item.precio,
            subtotal: item.precio * item.cantidad,
            descuento: 0.00,
        }));
    
        const data = {
            telefono,
            nombre_usuario: nombre,
            apellido_usuario: apellido,
            correo_usuario: correo,
            direccion,
            ciudad,
            id_metodo_pago: metodoPago,
            detalles,
        };
    
        fetch('https://deone.org/api/endpoints/register_sale.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Pedido enviado:', result);
    
                setCarrito([]);
                localStorage.removeItem('carrito');
                setTotal(0);
                setNombre('');
                setApellido('');
                setCorreo('');
                setDireccion('');
                setCiudad('');
                setTelefono('');
                setMetodoPago(1);
    
                const detallesWhatsApp = carrito.map(item => {
                    return `${item.nombre} (x${item.cantidad}) - S/${(item.precio * item.cantidad).toFixed(2)}`;
                }).join('\n');
    
                const mensaje = `Hola, quiero realizar el siguiente pedido:\n\n` +
                    `Nombre: ${nombre} ${apellido}\n` +
                    `Correo: ${correo}\n` +
                    `Teléfono: ${telefono}\n` +
                    `Dirección: ${direccion}\n` +
                    `Ciudad: ${ciudad}\n\n` +
                    `Detalles del pedido:\n${detallesWhatsApp}\n` +
                    `Total: S/${total.toFixed(2)}\n\n`;
    
                const whatsappUrl = `https://wa.me/51935874138?text=${encodeURIComponent(mensaje)}`;
                window.open(whatsappUrl, '_blank');
            })
            .catch(error => {
                console.error('Error al enviar pedido:', error);
            });
    };
    



    return (
        <div className="max-w-7xl mx-auto md:py-10 p px-5">
            <h2 className="text-3xl text-zinc-400 font-bold mb-4">Carrito de Compras</h2>

            <div className="flex md:flex-row flex-col gap-10">

                <div className="md:w-2/3 w-full ">
                    <div className="space-y-4">
                        {carrito.length === 0 ? (
                            <p className="text-center text-gray-500">El carrito está vacío</p>
                        ) : (
                            carrito.map((item) => (
                                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                    <img src={item.imagen} alt={item.nombre} className="w-16 h-16 object-cover rounded" />
                                    <div className="flex-1 ml-4">
                                        <h3 className="text-lg font-semibold">{item.nombre}</h3>
                                        <p className="text-sm text-gray-500">S/{item.precio}</p>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        {/* <button
                                            onClick={() => handleDecrement(item.id)}
                                            className="bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300 transition duration-300"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>
                                        </button> */}
                                        <span className='text-xl font-bold' >{item.cantidad}</span>
                                        {/* <button
                                            onClick={() => handleIncrement(item.id)}
                                            className="bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300 transition duration-300"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                        </button> */}
                                    </div>

                                    <button
                                        onClick={() => handleRemove(item.id)}
                                        className="ml-4 bg-rose-500 text-white p-2 rounded-lg hover:bg-rose-600 transition duration-300"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold">Total: S/{total.toFixed(2)}</h3>
                    </div>
                </div>

                <div className="max-w-xl bg-gray-100 p-5 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Datos del Comprador</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                                <input
                                    type="text"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Ingresa tu teléfono"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Ingresa tu nombre"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-2">Apellido</label>
                                <input
                                    type="text"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Ingresa tu apellido"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-2">Correo</label>
                                <input
                                    type="email"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Ingresa tu correo"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-2">Dirección</label>
                                <input
                                    type="text"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Ingresa tu dirección"
                                    required
                                />
                            </div>

                            <div className="mb-2">
                                <label className="block text-gray-700 font-medium mb-2">Ciudad</label>
                                <input
                                    type="text"
                                    value={ciudad}
                                    onChange={(e) => setCiudad(e.target.value)}
                                    className="w-full p-2 border rounded-lg"
                                    placeholder="Ingresa tu ciudad"
                                    required
                                />
                            </div>
                        </div>

                        <a
                            href="#"
                            target="_blank"
                            type="button"
                            onClick={handleRedirectWhatsApp}
                            className="w-full bg-rose-500 mt-5 text-white py-2 px-4 rounded-lg hover:bg-rose-600 transition duration-300"
                        >
                            Realizar Pedido
                        </a>
                    </form>

                </div>
            </div>
        </div>
    );
}
