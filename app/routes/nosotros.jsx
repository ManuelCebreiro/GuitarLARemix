import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'         //muy importante para el SEO
  }
}


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Aenean interdum mauris vitae risus viverra, vel condimentum leo maximus. Praesent faucibus commodo mattis. Etiam tempus tortor leo, sed porttitor felis bibendum eu. Maecenas nibh ex, aliquet sed aliquet at, euismod quis quam. Suspendisse id tellus tristique, luctus lorem sit amet, maximus tellus. Curabitur dignissim velit libero. In non sem id arcu tempor commodo. Praesent consequat sed odio at interdum.
          </p>
          <p>
            Aenean interdum mauris vitae risus viverra, vel condimentum leo maximus. Praesent faucibus commodo mattis. Etiam tempus tortor leo, sed porttitor felis bibendum eu. Maecenas nibh ex, aliquet sed aliquet at, euismod quis quam. Suspendisse id tellus tristique, luctus lorem sit amet, maximus tellus. Curabitur dignissim velit libero. In non sem id arcu tempor commodo. Praesent consequat sed odio at interdum.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros