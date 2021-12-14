import HomeIni from "../components/HomeIni"
import React from 'react';
import CarouselHome from "../components/CarouselHome";
import Image from "next/image";

export default function Home() {

  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  return (
    <>
      <div className="sm:w-4/5">
        <HomeIni>
          <div className="w-full flex flex-col">
            <h1 >Que é unha ludoteca?</h1>
            <hr />
            {loaded &&
              <CarouselHome />
            }
            <hr />
            <p>Unha ludoteca é un marabilloso lugar onde se realizan actividades para nenos utilizando xogos e xoguetes, especialmente está destinada nenos e nenas de curtas idades,<strong>nós acollemos nen@s de entre 3 e 9 anos</strong>.</p>
            <p>O principal obxectivo é servir como espazo pedagóxico para os nenos, tamén pretende ser de axuda a familias de nen@s con dificultades, axudando no desenvolvemento, coordianción e sociabilidade.</p>
          </div>
          <hr />
          <div className="w-full flex flex-col justify-center">
            <h1 className="flex">Que nos diferencia do resto de ludotecas?</h1>
            <p>Pois non! Ofrecemos os servizos típicos dunha ludoteca, o que nos diferenza é outra cousa... O xadrez!!</p>
            <p>Pero sempre podes botarlle un ollo aos nosos servizos igualmente...</p>
            <div className="flex flex-col my-4 w-max mx-48"><button type="button" className="p-1 bg-red-300 hover:bg-red-600 w-max border-4 border-red-200 font-semibold rounded-xl"><span>Consulta os nosos servizos!</span></button></div>
            <p>Creemos que o xadrez é unha ferramenta moi potente para axudar aos nosos pequechos a crecer e desenvolverse dunha forma óptima, por elo contamos con profesionais da educación e do xadrez.</p>
            <div className="my-4"><Image src="/kids_play_chess.jpg" alt="" width={40} height={25} layout='responsive' className="rounded-xl" loading="lazy"/></div>
            <p>Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
          </div>
        </HomeIni>
      </div>
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
        p {
          margin-left: 1em;
          color: #ca7777;
        }
        button {
          background-color: red
          border: 3px sold red;
        }
        span {
          color: white;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}