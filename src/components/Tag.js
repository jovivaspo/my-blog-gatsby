import React from "react"
import "../assets/css/tag.css"

const Tag = ({ tag }) => {
  return (
    <div className="container-tag">
      <p>{tag}</p>
    </div>
  )
}

export default Tag
