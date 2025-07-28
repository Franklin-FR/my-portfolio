import React from 'react'

type Props = {
  image: string
}

const Technology = ({ image }: Props) => {
  return (
    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
      <img src={image} alt="technology" className="w-10 h-10 object-contain" />
    </div>
  )
}

export default Technology



