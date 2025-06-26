import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import ConsultationForm from './pages/ConsultationForm'
import PhotoPortfolio from './pages/PhotoPortfolio'
import ScrollToTopCircle from './pages/ScrollToTopCircle'
import RoyalWedding from './pages/RoyalWedding'


function App() {
  return (
    <>    
      <Header/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/book' element={<ConsultationForm/>}/>\
      <Route path='/portfolio' element={<PhotoPortfolio/>}/>
      <Route path='/wedding' element={<RoyalWedding/>}/>
    </Routes>
      <Footer/>
      <ScrollToTopCircle/>
    </>

  )
}

export default App
