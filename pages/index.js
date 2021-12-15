import HomeIni from "../components/HomeIni"
import React from 'react';
import CarouselHome from "../components/CarouselHome";
import Image from "next/image";
import Link from "next/link";

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
            <p>Unha ludoteca é un marabilloso lugar onde se realizan actividades para nenos utilizando xogos e xoguetes, especialmente está destinada nenos e nenas de curtas idades, <strong>nós acollemos os/as nenos/as de entre 3 e 9 anos</strong>.</p>
            <p>O principal obxectivo é servir como espazo pedagóxico para os nenos, tamén pretende ser de axuda a familias de nen@s con dificultades, axudando no desenvolvemento, coordinación e sociabilidade.</p>
          </div>
          <hr />
          <div className="w-full flex flex-col">
            <div>
              <h1 className="flex">Temos diferenzas co resto de ludotecas?</h1>
              <p>Pois sí! Malia que ofertamos os servizos típicos dunha ludoteca, o que nos diferenza é outra cousa: o xadrez!!</p>
              <p>Pero sempre podes botarlle un ollo aos nosos servizos igualmente...</p>
            </div>
            <div className="flex flex-col my-4 w-max m-auto"><Link href='/servizos'><a><button type="button" className="p-1 bg-red-300 hover:bg-red-600 w-max border-4 border-red-200 font-semibold rounded-xl"><span>Consulta os nosos servizos!</span></button></a></Link></div>
            <div>
              <p>Creemos que o xadrez é unha ferramenta moi potente para axudar aos nosos pequechos a crecer e desenvolverse dunha forma óptima, por elo contamos con profesionais da educación e do xadrez.</p>
              <div className="my-4"><Image src="/kids_play_chess.jpg" alt="" width={40} height={25} layout='responsive' className="rounded-xl" loading="lazy" /></div>
              <p>Veña, anímate! Achégate e fainos unha visita, atopámonos aquí:</p>
              <div className="flex flex-col my-4 w-max m-auto">
                <Link href='https://www.google.com/maps/place/Casa+da+Xuventude/@42.5950484,-8.7649837,17z/data=!3m1!5s0xd2f1410ee8b9415:0x1583d307cc4ed68!4m5!3m4!1s0xd2f1410ee92f23b:0x78eb1ae4b31a9e79!8m2!3d42.5950445!4d-8.762795'>
                  <a target='_blank'>
                    <button type="button" className="p-1 bg-red-300 hover:bg-red-600 w-max border-4 border-red-200 font-semibold rounded-xl">
                      <span>Visítanos!</span>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
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