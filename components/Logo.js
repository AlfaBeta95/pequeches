import Image from 'next/image'

const Logo = () => (
  <Image
    src='/logo.png' // Route of the image file
    height={80} // Desired size with correct aspect ratio
    width={80} // Desired size with correct aspect ratio
    alt='Logo'
  />
)

export default Logo;