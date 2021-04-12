import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase/';

const useProductos = orden => {
    // definicion del state
    const [productos, guardarProductos] = useState([]);
    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerProductos = () => {
            firebase.db.collection('aplicaciones').orderBy(orden, 'desc').onSnapshot(manejarSnapshot)
        }
        obtenerProductos();
    }, []);

    function manejarSnapshot(snapshot) {
        const productos = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        });

        guardarProductos(productos);
    }

    return { productos }
}

export default useProductos;