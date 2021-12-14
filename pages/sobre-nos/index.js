import AboutIni from "../../components/AboutIni"
import Equipo from "../../components/Equipo"
import AboutAccordion from "../../components/AboutAccordion"
import ClientesSatisfeitos from "../../components/ClienteSatisfeitos"


export default function About() {
  const primaryColor = '#ca6666'
  const secondaryColor = '#ca7777'

  return (
    <>
      <div className="sm:w-4/5">
        <AboutIni>
          <Equipo />
          <hr />
          <div className="w-full flex flex-col">
            <h1 >Nosos intereses</h1>
            <AboutAccordion priColor={primaryColor} secColor={secondaryColor} />
          </div>
          <div className="w-full flex flex-col">
            <ClientesSatisfeitos/>
          </div>

        </AboutIni>
      </div>
      <style jsx>{`
        * {
          text-align: left;
        }
        h1 {
          color: ${primaryColor};
        }
        h1 {
          font-size: 2em;
          font-weight: bold;
        }
        hr {
          margin: 2em 0;
        }
        p {
          margin-left: 1em;
          color: ${secondaryColor};
        }
      
      `}</style>
    </>
  )
}
