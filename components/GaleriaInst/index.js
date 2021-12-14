import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

const img_size = 121;

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function GaleriaInst() {
    return (
        <>
            <ImageList
                className="md:grid flex flex-col" /// Mirar que e isto para facer responsive
                sx={{ width: 1600, height: 750 }}
                // variant="quilted"
                cols={4}
                rowHeight={img_size}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <Image
                            className="rounded-xl object-cover"
                            {...srcset(item.img, img_size, item.rows, item.cols)}
                            width={img_size * (item.cols || 1)}
                            height={img_size * (item.rows || 1)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <style jsx>{`
    img {
          border-radius: 10px;
        }
    `}</style>
        </>
    );
}

const itemData = [
    {
        img: '/instalacions_header.jpg',
        title: 'Ludoteca exterior',
        rows: 2,
        cols: 2,
    },
    {
        img: '/bloques.jpg',
        title: 'Bloques',
        rows: 2,
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
        img: '/pared.jpg',
        title: 'Pared',
        rows: 2,
    },
    {
        img: '/tobogan.jpg',
        title: 'Tobogán',
        rows: 2,
        cols: 2,
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
        rows: 2,
        cols: 2,
    },
    {
        img: '/casa.jpg',
        title: 'Casa',
        cols: 2,
        rows: 2,
    },
    
];