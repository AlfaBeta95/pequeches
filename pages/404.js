import Link from "next/link"
import Image from "next/image"

// pages/404.js
export default function Custom404() {
    return (
        <>
            <section className="flex items-center h-full p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <Image
                            src='/not_found.jpg' // Route of the image file
                            height={350} // Desired size with correct aspect ratio
                            width={650} // Desired size with correct aspect ratio
                            alt='Erro 404'
                            content='404'
                        />
                        <h2 className="er404 mb-8 font-extrabold text-4xl">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sentímolo, pero non puidemos atopar a páxina solicitada.</p>
                        <p className="mt-4">Desculpa as molestias, pero sempre podes voltar á páxina de inicio.</p>
                        <Link href='/'>
                            <a className="px-8 py-3 font-semibold rounded">Retornar a Inicio</a>
                        </Link>
                    </div>
                </div>
            </section>
            <style jsx>{`
                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </>
    )
}