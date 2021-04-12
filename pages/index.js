import React  from 'react'
// Components
import Layout from '../components/layout/Layout';
import DetallesProducto from '../components/layout/DetallesProducto';
// Hooks
import useProductos from '../hooks/useProductos';

const Home = () => {

  const { productos } = useProductos('creado');

  return (
    <div>
      <Layout>
        <div className="listado-productos">
            <div className="contenedor">
              <ul className="bg-white">
                  {productos.map(producto => (
                      <DetallesProducto key={producto.id} producto={producto} />
                  ))}
              </ul>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home