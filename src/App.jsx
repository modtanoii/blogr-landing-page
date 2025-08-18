import './App.css'
import Navbar from '../components/Navbar'
import Section from '../components/Section'

function App() {

  return (
    <>
      <div className='bg-gradient-to-r from-orange-300 from-5% to-red-400 to-30% relative min-w-[1440px]'>
        <img src="/images/bg-pattern-intro-desktop.svg" className='w-full h-full object-cover absolute' />
        <Navbar />
        <Section />
      </div>
    </>
  )
}

export default App
