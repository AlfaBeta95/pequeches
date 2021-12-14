import Image from "next/image"

export default function HomeIni({ children }) {
    return (
        <>
            <div className="w-full p-5 mx-auto sm:p-10 md:p-8 bg-coolGray-100 text-coolGray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <div className="w-full h-60 sm:h-96"><Image src="/juegos.jpg" alt="" width={40} height={20} layout='responsive' className="rounded-xl" /*loading="lazy"*/ priority/></div>
                    <div className="bg-red-100 p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-coolGray-50 rounded-xl z-10">
                        <div className="space-y-2">
                            <a href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Benvido a Pequechés!</a>
                            <p className="text-xs text-coolGray-600">
                                <a href="#" className="text-xs hover:underline">Pequechés</a>
                            </p>
                        </div>
                        <div className="text-coolGray-800">
                            Quédate e bota un ollo, coñécenos! :D
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_wrapper rounded-xl sm:shadow-lg sm:max-w-full px-2 py-3 sm:px-12 sm:py-6 sm:overflow-auto">
                {children}
            </div>
            <style jsx>{`
            .section_wrapper {
                    font-family: "";
                    display: flex;
                    flex-direction: column;
                    background-color: #eccece;
                    min-width: 100%;
                }
            `}</style>
        </>
    )
}