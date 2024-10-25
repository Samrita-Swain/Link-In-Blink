import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigations from './Components/Navigations';
import Mainpage from './Components/Mainpage'
import Secondpage from './Components/Secondpage'
import Thirdpage from './Components/Thirdpage';
import Lastpage from './Components/Lastpage';
import "./App.css"
const App = () => {
  return (
    <div>
     <Navigations />
     <Mainpage />
     <Secondpage />
     <Thirdpage />
     <Lastpage />
    </div>
  )
}

export default App
