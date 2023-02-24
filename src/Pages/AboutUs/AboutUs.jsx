import React from 'react'
import './AboutUs.style.css'

const AboutUs = () => {
    return (
    <>
    <div className='header-aboutus'>
        <h3>
            Abriendo mundos a través de la educación:
            Libros que cambian vidas
        </h3>
        <h4>Nuestros valores</h4>
    </div>
    <div className='body-aboutus'>

        <table>
            <tr>
                <th>Compromiso con la educación</th>
                <th>Responsabilidad social</th>
                <th>Transparéncia y ética</th>
                <th>Innovación</th>
            </tr>
            <tr>
                <td>
                    <p>
                    Somos una empresa comprometida con la educación. Creemos que la educación es un derecho y un factor clave para el desarrlo de los niños y jovenes. Por eso, nuestra empresa vende libros de calidad que cntribuyen a la educación de los niños.
                    Nuestros libros son relevantes, informativos y de fácil comprensión. Ofrecemos una variedad de opciones para satisfacer las necesidades de diferentes grupos de edad e intereses.
                    </p>
                </td>
                <td>
                    <p>
                        Asumimos una responsabilidad social y somos conscientes de nuestro impacto en la sociedad. por ello, donamos dinero a los niños que necesitan apoyo en la educación, contribuyendo a mejorar sus oportunidades y reducir la brecha educativa.
                    </p>
                </td>
                <td>
                    <p>
                        Nos regimos por altos estándares éticos y de transparencia en todas nuestras operaciones y donaciones. Nuestras políticas son claras y justas en relación a la donación de dinero y en todas nuestras actividades comerciales.
                    </p>
                </td>
                <td>
                    <p>
                        Estamos comprometidos con la innovación y siempre estamos abiertos a nuevas ideas y formas de apoyar la educación.
                        Buscamos constantemente nuevas tecnologías y herramientas de aprendizaje, colaboramos con otras organizaciones y creamos programas de voluntariado, entre otras iniciativas innovadoras.
                    </p>
                </td>
            </tr>
        </table>
    </div>
    </>
    )
}

export default AboutUs