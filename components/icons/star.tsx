import React from 'react'
import { SvgXml } from 'react-native-svg'
import { COLORS } from 'app/config/constants'

const xml =  (isFilled: boolean) => `
  <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
    <path
      fill="${isFilled ? COLORS.TEXAS_ROSE : COLORS.WHITE}" 
      stroke="${isFilled ? COLORS.TEXAS_ROSE : COLORS.DODGER_BLUE}"
      opacity="0.8"
      d="M14.5919 2.28482C15.0732 0.974251 16.9268 0.97425 17.4081 2.28482L19.9471 9.19901C20.2966 10.1507 21.1863 10.7971 22.1995 10.8354L29.5599 11.1136C30.955 11.1663 31.5278 12.9292 30.4301 13.7919L24.6389 18.3433C23.8418 18.9698 23.5019 20.0157 23.7786 20.9911L25.7885 28.0772C26.1695 29.4203 24.6699 30.5099 23.5102 29.7325L17.392 25.6312C16.5499 25.0667 15.4501 25.0667 14.608 25.6312L8.48978 29.7325C7.33009 30.5099 5.83051 29.4203 6.21149 28.0772L8.22141 20.9911C8.49808 20.0157 8.15824 18.9698 7.36109 18.3433L1.56992 13.7919C0.472213 12.9292 1.045 11.1663 2.44015 11.1136L9.80054 10.8354C10.8137 10.7971 11.7034 10.1507 12.0529 9.19901L14.5919 2.28482Z"
    />
  </svg>
`

type Props = {
  isFilled: boolean
}

const StarIcon = (props: Props) => {
  return (
    <SvgXml xml={xml(props.isFilled)} />
  )
}

export default StarIcon

