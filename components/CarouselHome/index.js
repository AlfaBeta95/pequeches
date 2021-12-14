import Image from "next/image";
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

export default function CarouselHome({ children }) {

    const items = [
        {
          src: "/kid_garden.jpg",
          alt: "Niño jardín"
        },
        {
          src: "/casa.jpg",
          alt: "Casa juegos"
        },
        {
          src: "/instalacions_header.jpg",
          alt: "Exterior"
        },
        {
          src: "/servizos_header.jpg",
          alt: "Teléfono jueguete"
        },
        {
          src: "/sobre_nos.jpg",
          alt: "Nós"
        },
        {
          src: "/tobogan.jpg",
          alt: "Tobogán"
        },
        {
          src: "/mascarilla.jpg",
          alt: "Nena con mascarilla"
        },
      ]
      function Item(props) {
        return (
          <Paper className="rounded-xl">
            <Image
              src={props.item.src}
              alt={props.item.alt}
              width={40}
              height={24}
              layout='responsive'
              className="rounded-xl"
              // loading="lazy"
              priority
            />
          </Paper>
        )
      }
    return (
        <>
          <Carousel
          stopAutoPlayOnHover = {true}
          animation = 'slide'
          duration = {950000}
          >
            {
              items.map((item, i) => <Item key={i} item={item} />)
            }
          </Carousel>
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