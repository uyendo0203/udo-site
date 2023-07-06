"use client"
import { useEffect } from 'react'

export default function Page() {

  useEffect(() => {
    console.log('222')
  })

  return (
    <div id="content" className="h-screen w-screen">
      <div className="relative h-full w-full">
        <img className="absolute left-0 top-0 h-full w-full object-cover" src="https://tecdn.b-cdn.net/img/Photos/Others/img%20(52).jpg" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-zinc-700/40 bg-fixed p-6 text-center text-white/80">
        <h1 className="mb-2 mt-56 text-[6rem] font-medium leading-[1.2]">
          Natalie Smith
        </h1>
        <h2 className="mb-2 mt-0 text-[2.8rem] font-medium leading-[1.2]">
          Portfolio
        </h2>
      </div>
    </div>
  )
}
