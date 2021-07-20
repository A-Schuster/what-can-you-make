// TODO Create a connected component to render a fetched recipe
import React from "react"
import { useParams } from "react-router-dom"

export const Recipe = () => {
  const {id} = useParams()
  return(
    <div>
      <h2>derp</h2>
    </div>
  )
} 