import { createRoot } from 'react-dom/client'
import { Global, css } from '@emotion/react'
import emotionNormalize from 'emotion-normalize'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          html, body {
            padding: 0;
            margin: 0;
            overflow-x: hidden;
            background-color: #000000;
            color: #ffffff;
            font-family: Work Sans, sans-serif;
          }
        `}
      />
      <App />
    </>
  )
})
