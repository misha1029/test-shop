import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
  <ContentLoader 
    speed={2}
    width={150}
    height={250}
    viewBox="0 0 150 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="0" y="0" rx="10" ry="10" width="160" height="155" /> 
    <rect x="1" y="162" rx="5" ry="5" width="160" height="15" /> 
    <rect x="-4" y="185" rx="5" ry="5" width="110" height="15" /> 
    <rect x="0" y="236" rx="0" ry="0" width="90" height="25" /> 
    <rect x="117" y="229" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
)

export default Loading