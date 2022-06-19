import React from 'react'
import { SvgXml } from 'react-native-svg'
import { COLORS } from 'app/config/constants'

const getColorByProgress = (progress: number, limit: number) => {
  if (progress >= limit) return COLORS.DODGER_BLUE
  else return COLORS.GRAY
}

const getXml = (progress: number) =>  `
  <svg width="81" height="86" viewBox="0 0 81 86" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="39" cy="9" r="9" fill='${getColorByProgress(progress, 10)}'/> 
    <circle cx="60.5" cy="15.5" r="8.5" fill='${getColorByProgress(progress, 20)}'/>
    <circle cx="73" cy="33" r="8" fill='${getColorByProgress(progress, 30)}'/>
    <circle cx="73.5" cy="55.5" r="7.5" fill='${getColorByProgress(progress, 40)}'/>
    <circle cx="60" cy="73" r="7" fill='${getColorByProgress(progress, 50)}'/>
    <circle cx="38.5" cy="79.5" r="6.5" fill='${getColorByProgress(progress, 60)}'/>
    <circle cx="18" cy="72" r="6" fill='${getColorByProgress(progress, 70)}'/>
    <circle cx="5" cy="54" r="5" fill='${getColorByProgress(progress, 80)}'/>
    <circle cx="5.5" cy="33.5" r="4.5" fill='${getColorByProgress(progress, 90)}'/>
    <circle cx="15" cy="16" r="4" fill='${getColorByProgress(progress, 100)}'/>
  </svg>
`
type Props = {
  progress: number
}

const ProgressCircle = (props: Props) => {
  return (
    <SvgXml xml={getXml(props.progress)}/>
  )
}

export default ProgressCircle
