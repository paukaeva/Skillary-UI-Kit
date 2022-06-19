import React from 'react'
import { SvgXml } from 'react-native-svg'

const getXml = () => `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_2942_30903)">
    <path d="M29.375 17.6562C29.375 12.487 25.1693 8.28125 20 8.28125C14.8307 8.28125 10.625 12.487 10.625 17.6562C10.625 22.8255 14.8307 27.0312 20 27.0312C25.1693 27.0312 29.375 22.8255 29.375 17.6562ZM23.9688 23.5087L20 21.4225L16.0312 23.5087L16.7911 19.0913L13.5798 15.9637L18.0167 15.3171L20 11.2979L21.9833 15.317L26.4202 15.9636L23.2089 19.0912L23.9688 23.5087Z" fill="#2AA6FF"/>
    <path d="M30.0227 7.39203L28.9927 2.53859L23.6323 3.83867L20 0L16.2349 3.87531L11.4204 2.32578L9.73577 7.63352L4.8835 8.66461L6.18241 14.0239L2.41272 17.4285L6.21905 21.4213L4.66952 26.2359L9.99788 27.9273L11.1594 32.7578L12.9687 32.262V26.9712C10.1399 24.8299 8.28124 21.4692 8.28124 17.6562C8.28124 11.1948 13.5387 5.93742 20 5.93742C26.4613 5.93742 31.7187 11.1948 31.7187 17.6562C31.7187 21.4692 29.8601 24.8299 27.0312 26.9712V32.3959L28.6174 32.8608L30.2642 27.6789L35.1165 26.6478L33.8176 21.2885L37.5873 17.8839L33.7809 13.8911L35.3305 9.07656L30.0227 7.39203Z" fill="#2AA6FF"/>
    <path d="M21.3824 17.5979L20.4268 17.4583L20 16.5942L19.5731 17.4583L18.6176 17.5979L19.3087 18.2719L19.1462 19.223V19.2241L20 18.7744L20.8537 19.2241L20.8536 19.2228L20.6912 18.2719L21.3824 17.5979Z" fill="#2AA6FF"/>
    <path d="M24.6875 40.0001V28.3818C23.2494 29.0131 21.6683 29.3751 20 29.3751C18.3317 29.3751 16.7506 29.0131 15.3125 28.3818V40.0001L20 36.4845L24.6875 40.0001Z" fill="#2AA6FF"/>
    </g>
  <defs>
    <clipPath id="clip0_2942_30903">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>
`
const StarMedal = () => {
  return (
    <SvgXml xml={getXml()} />
  )
}

export default StarMedal