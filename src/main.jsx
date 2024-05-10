import React from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './Components/Heading/Heading'
import MainSection from './Components/MainSection/MainSection'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Heading/>
    <MainSection/>
  </React.StrictMode>,
)
