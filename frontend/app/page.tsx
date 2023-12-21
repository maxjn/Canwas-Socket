'use client'

import { FC, useState } from 'react'
import { useDraw } from '../hooks/useDraw'
import { ChromePicker } from 'react-color'
import { io } from 'socket.io-client'

interface pageProps {}

const Page: FC<pageProps> = ({}) => {
  const [color, setColor] = useState<string>('#000')
  const { canvasRef, onMouseDown, clear } = useDraw(drawLine)

  const socket = io(process.env.BACKEND_URL || 'http://localhost:5000');

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {

  }
  function createLine({ prevPoint, currentPoint, ctx }: Draw) {
  
  }

  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center'>
      <div className='flex flex-col gap-10 pr-10'>
        <ChromePicker color={color} onChange={(e) => setColor(e.hex)} />
        <button type='button' className='p-2 rounded-md border border-black' onClick={clear}>
          Clear canvas
        </button>
      </div>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        width={750}
        height={750}
        className='border border-black rounded-md'
      />
    </div>
  )
}

export default Page
