import React, { useContext, useEffect, useState } from 'react'
import RenderImage from "./RenderImage"
import Link from "next/link"
import { MyContext } from "@/pages/_app"

function ShowCategory() {
  const [isLoading, setIsLoading] = useState(false)
  const {brandy} = useContext(MyContext)
 
  const randomSrc = (d) => {
    return d[Math.floor(Math.random()*d.length)]
  }
  return (
    <div className="flex flex-wrap gap-5 justify-center my-10">
      {
        Object.keys(brandy).map((category, key)=>{
          return (
              <Link key={category+key} href={"/brandy/"+category}>
                <div className="h-80">
                  <RenderImage src={brandy[category][0]} />
                </div>
                <div className="bg-gray-700 hover:bg-gray-800 mt-1 rounded-md py-1">
                  <h3 className="font-semibold text-white text-center">{category}</h3>
                </div>
              </Link>
          )
        })
      }
    </div>
  )
}

export default ShowCategory