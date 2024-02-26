import "./HomePage.css"
import SideBar from '../../components/sidebar/SideBar'
import Navber from '../../components/navber/Navber'
import Hero from '../../components/hero/Hero'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-left">
        <SideBar />
      </div>
      <div className="home-right">
        <Navber />
        <Hero />
      </div>
    </div>
  )
}

export default HomePage