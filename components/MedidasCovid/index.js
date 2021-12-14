import Image from "next/image"

export default function MedidasCovid({ children }) {
    return (
        <>
            <section className=" ">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">Prevención</h3>
                            <p className="mt-3 text-lg ">O primeiro para non contaxiarse é aplicar de maneira correcta a prevención:</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 ">Síntomas</h4>
                                        <p className="mt-2 ">Se presentas síntomas, non veñas á ludoteca, acude ao médico e avísanos!</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 ">Mascarilla</h4>
                                        <p className="mt-2 ">Acórdate de traer unha mascarilla axeitada e outra de reposto por se acaso. De todas formas no centro dispoñemos de máis mascarillas en caso de necesidade.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 ">Calzado</h4>
                                        <p className="mt-2 ">Quitaremos o calzado antes de entrar, dentro do centro camiñaremos con calcetíns ou zapatillas antideslizantes. Así non traemos virus da rúa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <Image src="/mascarilla.jpg" alt="Niña con mascarilla" width={500} height={320} className="mx-auto rounded-lg shadow-lg " />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">Ben común</h3>
                                <p className="mt-3 text-lg ">Para que todos estemos saudables hai que coidarse en equipo, para elo seguiremos estas sinxelas regras:</p>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 ">Gardar distanca</h4>
                                            <p className="mt-2 ">É moi importante que gardes a distancia dentro do posible, especialmente cando te quites a mascarilla. Tamén especialmente na entrada e saída da ludoteca.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 ">Lavado de mans</h4>
                                            <p className="mt-2 ">Tenta lavar as mans con auga e xabón(ou con hidroxel no seu defecto) antes e despois de tocar algo común. Esta sinxela acción manteranos a todos máis seguros.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md ">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 ">Temperatura</h4>
                                            <p className="mt-2 ">Tomaremos a túa temperatura durante a entrada á ludoteca para comprobar que todo está correctamente.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                            <Image src="/lavar_manos.jpg" alt="Niño lavando manos" width={500} height={320} className="mx-auto rounded-lg shadow-lg " />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
            h3, h4 {
                color: #ca6666;
            }
            h4 {
                font-weight: bold;
            }
            p {
          margin-left: 1em;
          color: #ca7777;
        }
            `}</style>
        </>
    )
}