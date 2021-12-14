import * as React from 'react';
import Image from 'next/image';

const size = 121;

export default function GaleriaInstMobile({ ...props }) {
    return (
        <>
            {itemData.map((item) => (
                <div key={item.img}>
                    <Image
                        className="rounded-xl"
                        src={item.img}
                        height={size}
                        width={size * 2}
                        alt={item.title}
                        loading="lazy"
                        // priority
                    />
                </div>
            ))}
        </>
    );
}

const itemData = [
    {
        img: '/instalacions_header.jpg',
        title: 'Ludoteca exterior',
    },
    {
        img: '/juegos.jpg',
        title: 'Juegos',
    },
    {
        img: '/pizarra.jpg',
        title: 'Pizarra',
    },
    {
        img: '/tobogan.jpg',
        title: 'Tobogán',
    },
    {
        img: '/kids_play_chess.jpg',
        title: 'Kids playing chess',
    },
    {
        img: '/kid_garden.jpg',
        title: 'Kid playing in garden',
    },
    {
        img: '/servizos_header.jpg',
        title: 'Teléfono juguete',
    },
    {
        img: '/casa.jpg',
        title: 'Casa',
    },

];