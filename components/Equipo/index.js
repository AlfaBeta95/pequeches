/* eslint-disable @next/next/no-img-element */

export default function Equipo() {
    return (
        <>
            <section className="py-6 text-coolGray-800">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">O noso equipo</h1>
                    <p className="max-w-2xl text-center text-coolGray-600">Temos un equipo formado polos mellores profesionais!</p>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="Perfil 1" className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full" src="https://source.unsplash.com/100x100/?portrait" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <div className="flex content-center text-coolGray-600">
                                <div>Maestr@ educación infantil</div>
                                <div className="ml-2 mt-1"><a href="#" title="LinkedIn" className="text-coolGray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a></div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="Perfil 2" className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full" src="https://source.unsplash.com/101x101/?portrait" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <div className="flex content-center text-coolGray-600">
                                <div>Profesor/a ajedrez</div>
                                <div className="ml-2 mt-1"><a href="#" title="LinkedIn" className="text-coolGray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a></div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="Perfil 3" className="self-center w-24 h-24 mb-4 bg-center bg-cover rounded-full" src="https://source.unsplash.com/102x102/?portrait" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <div className="flex content-center text-coolGray-600">
                                <div>Psicólog@</div>
                                <div className="ml-2 mt-1"><a href="#" title="LinkedIn" className="text-coolGray-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                    </svg>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
            h1 {
                color: #ca6666;
            }
            `}</style>
        </>
    )
}