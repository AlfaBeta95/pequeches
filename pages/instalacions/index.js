import React from "react"
import InstalacionsIni from "../../components/InstalacionsIni"
import GaleriaInst from "../../components/GaleriaInst"
import { isMobile } from "react-device-detect"
import GaleriaInstMobile from "../../components/GaleriaInstMobile"
import MedidasCovid from "../../components/MedidasCovid"
import Sizes from "../../components/util/Sizes"

export default function Instalacions() {

  const [loaded, setLoaded] = React.useState(false)
  const [mobile, setMobile] = React.useState(isMobile)
  const {width} = Sizes()
  const customBreakPoint = 768;

  React.useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  React.useEffect(() => {
    if(width <= customBreakPoint){
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [width]);

  return (
    <>
      <div className="sm:w-4/5">
        <InstalacionsIni>
          <h1>Bota un ollo as nosas instalacións!</h1>
          {!mobile ?
            loaded && <div key={'gallery_!isMobile'} className="flex max-w-full max-h-full mt-6">
              <GaleriaInst />
            </div>
            :
            loaded && <div key={'gallery_isMobile'} className="flex flex-col items-center content-around">
              <GaleriaInstMobile />
            </div>
          }
          <hr />
          <div className="w-full flex flex-col">
            <h1>Localización</h1>
            <div className="w-full mapouter_mobile md:mapouter">
              <div className="w-full gmap_canvas">
                <p>
                  Atopámonos en Vilagarcía de Arousa, se pertences a comarca do Salnés ou arredores non dubides en facernos unha visita:
                </p>
                <iframe
                  className="mt-6 rounded-xl"
                  width="100%"
                  height="400"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=casa%20xuventude%20villagarcia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0" />
              </div>
            </div>
            <div id="map"></div>
          </div>
          <hr />
          <div className="w-full flex flex-col">
            <h1 >Medidas Covid</h1>
            <MedidasCovid />
          </div>
        </InstalacionsIni>
      </div>
      <style jsx>{`
        .mapouter{position: relative; text-align: right; height: 100%; width: 100%;}
        .gmap_canvas {overflow: hidden; background: none!important; height: 100%; width: 100%;}
        .mapouter_mobile{position: relative; text-align: right;  height: 100%; width: 100%;}
        .gmap_canvas_mobile {overflow: hidden; background: none!important; height: 100%; width: 100%;}
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
      
      `}</style>
    </>
  )
}
