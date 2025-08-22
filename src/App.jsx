import './App.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Section from '../components/Section'
import Topic from '../components/Topic'

function App() {

  return (
    <>
      <div className='bg-Img h-150 md:h-145'>
        <Navbar />
        <Header />
      </div>
      <div className='' >
        <Section />
      </div>
      <div className='art-Img h-155 mt-65 place-content-center'>
        <Topic />
      </div>
    </>
  )
}

export default App
