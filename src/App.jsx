import './App.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Section from '../components/Section'
import Topic from '../components/Topic'

function App() {

  return (
    <>
      <div className='container bg-Img h-150'>
        <Navbar />
        <Header />
      </div>
      <div>
        <Section />
      </div>
      <div className='container art-Img h-155 mt-65 place-content-center'>
        <Topic />
      </div>
    </>
  )
}

export default App
