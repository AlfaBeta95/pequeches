import HorarioTimeline from '../../components/HorarioTimeline'
import PricingTabs from '../../components/PricingTabs'
import ServizosIni from '../../components/ServizosIni'
import ServicesTable from '../../components/ServicesTable'
import { isMobile } from "react-device-detect"

export default function Servizos() {
  return (
    <>
      <div className="sm:w-4/5">
        <ServizosIni>
          <div>
            <h1>Por qué elixirnos, que nos diferencia do resto?</h1>
            <p>Somos unha ludoteca especial, ofrecemos o que ofrece unha ludoteca normal
              e a maiores contamos con un equipo de monitores formado no deporte do xadrez e
              na educación. Nós ensinamos xadrez base aos cativos, o que fai que se desenvolvan a capacidades como:
            </p>
            <ul>
              <li>A súa memoria</li>
              <li>A capacidade de análise</li>
              <li>Empatía, xa que se porá na pel do outro xogador</li>
              <li>Socialización</li>
              <li>Creatividade</li>
              <li>Aceptación de regras</li>
              <li>Concentración</li>
              <li>Planificación</li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>Horario</h1>
            <p>De luns a venres, de 9:00 a 14:00 e organizamos o tempo da seguinte maneira:</p>
            <HorarioTimeline />
          </div>
          <hr />
          <div>
            <h1 >Tarifas</h1>
            <div className="flex flex-col w-full mt-4">
              {!isMobile ?
                <ServicesTable />
                :
                <PricingTabs />
              }
            </div>
          </div>
        </ServizosIni>
      </div>

      {/* Estilos */}
      <style jsx>{`
        * {
          text-align: left;
        }
        h1, h2, h3 {
          color: #ca6666;
        }
        h1 {
          font-size: 2em;
          font-weight: bold;
        }
        hr {
          margin: 2em 0;
        }
        p, time, li {
          margin-left: 1em;
          color: #ca7777;
        }
        ul {
          padding-left: 4em;
        }
        ul > li {
          list-style: numeric;
          font-weight: bold
        }
      `}</style>
    </>
  )
}
