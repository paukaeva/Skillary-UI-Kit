import React from 'react'
import { SvgXml } from 'react-native-svg'
import { COLORS } from 'app/config/constants'

const getXml = (color: COLORS) => `
  <svg width='24' height='31' viewBox='0 0 24 31' fill='none'>
    <path d='M2 28.8471V19.9722V18H21.9809V27.861C22.2268 30.2277 20.0341 30.162 18.9069 29.8333C18.9069 29.8333 13.2121 26.4427 11.697 26.4427C10.1818 26.4427 6.30358 28.8471 6.30358 28.8471C3.21212 30.5185 2.3074 30.162 2 28.8471Z' fill='${color}' stroke='white'/>
    <circle cx='12' cy='12' r='12' fill='white'/>
    <circle cx='12' cy='12' r='11' fill='${color}'/>
    <path d='M13 6.58594V18H11.1172V8.82031L8.32812 9.76562V8.21094L12.7734 6.58594H13Z' fill='white'/>
  </svg>
`
const RatingMedalIcon = (props) => {
  return (
    <SvgXml xml={getXml(props.color)} />
  )
}

export default RatingMedalIcon
