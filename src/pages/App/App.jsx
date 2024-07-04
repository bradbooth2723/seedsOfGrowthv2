import SOGNavBar from 'pages/SOGNavBar/SOGNavBar';
import SOGHome from 'pages/SOGHome/SOGHome';
import { Route, Routes } from "react-router-dom";
import './styles.css';
import 'styles/grid.css';

const App = () => {
  return (
    <div className='grid'>
      <div className='nav-bar'><SOGNavBar /></div>
      <Routes>
        <Route path='/' element={<SOGHome />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

const Home = () => {
  return <h1>Home</h1>
}

const Pricing = () => {
  return <h1>Pricing</h1>
}

const About = () => {
  return <h1>About</h1>
}

export default App
