import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import ConsultationForm from './pages/ConsultationForm'
import PhotoPortfolio from './pages/PhotoPortfolio'
import ScrollToTopCircle from './pages/ScrollToTopCircle'
import RoyalWedding from './pages/RoyalWedding'
import ExperienceDetail from './pages/ExperienceDetail'
import About from './pages/About'
// import Celebration from './pages/Celebration'
import CulturalExhibitions from './pages/CulturalExhibitions'
import Services from './pages/Services'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
         <Route path='/Service' element={<Services/>} />
        <Route path='/book' element={<ConsultationForm />} />
        <Route path='/portfolio' element={<PhotoPortfolio />} />
        <Route path='/wedding' element={<RoyalWedding />} />
{/*         <Route path='/celebration' element={<Celebration />} /> */}
        <Route path='/exhibitions' element={<CulturalExhibitions />} />
        <Route path='/details/:id' element={<ExperienceDetail />} />
        <Route path='/about' element={<About />} />
        

      </Routes>
      <Footer />
      <ScrollToTopCircle />
    </>

  )
}

export default App
