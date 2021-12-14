import Link from 'next/link'
import CustomFluidContainer from '../../components/util/CustomFluidContainer'

export default function PoliticaCookies() {
  return (
    <>
      <CustomFluidContainer>
        <h1>POLÍTICA DE COOKIES</h1>
        <div>{getPoliticaCookies()}</div>
      </CustomFluidContainer>
      <style jsx>{`
        h1 {
          font-size: 2em;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}

function getPoliticaCookies() {
  return (
    <>
      <div>
        <p>El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.</p>
        <p>Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.</p>
        <p>La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.</p>
        <p>Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.</p>
      </div>
      <div>
        <h2>Deshabilitar, rechazar y eliminar cookies</h2>
        <p>El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.</p>
        <p>Este documento de Política de Cookies ha sido creado mediante el generador de plantilla de política de cookies online el día 14/12/2021.</p>
      </div>
      <div>
        <h2>Para informase de cómo eliminar las cookies de su explorador:</h2>
        <ul>
          <li><Link href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"><a>Firefox</a></Link></li>
          <li><Link href="https://support.google.com/chrome/answer/95647?hl=es"><a>Chrome</a></Link></li>
          <li><Link href="https://support.microsoft.com/es-es/topic/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"><a>Internet Explorer</a></Link></li>
          <li><Link href="https://support.apple.com/kb/PH19214?viewlocale=es_ES&locale=es_ES"><a>Safari</a></Link></li>
          <li><Link href="https://www.allaboutcookies.org/es/administrar-las-cookies/opera.html"><a>Opera</a></Link></li>
        </ul>
      </div>
      <style jsx>{`
        h2 {
          font-size: 1.5em;
          font-weight: bold;
        }
        p, ul {
          margin: 5px 0 5px 10px;
        }
        li {
          margin-left: 12px;
          list-style: circle;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}