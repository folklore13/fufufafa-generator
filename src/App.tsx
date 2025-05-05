import './App.css'
import Profile from './components/Profile'
import Status from './components/Status'
import Footer from './components/Footer'
import Toggle from './components/Toggle'

function App() {
  return (
    <>
      <Toggle />
      <div className="flex flex-col gap-y-2 md:w-100 w-75">
        <Profile />
        <Status />
        <Footer />
      </div>
    </>
  )
}

export default App
