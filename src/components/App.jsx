import '/src/stylesheet/App.css'
import NavBar from './NavBar'
import Header from './Header'
import "/src/stylesheet/styles.css"
import About from "/src/components/About.jsx"
import Experience from './Experience'
import Footer from './Footer'
import Gallery from './Gallery'

function App() {
  return (
    <div className= "MainLayout">
    <Header />
    <NavBar />
    <div className="MainContent">
    <h2 id= "ABOUT">About</h2>
    <About />
    <h2 id= "EXPERIENCE"> Experience</h2>   
    <Experience />
    <h2 id= "GALLERY"> Gallery</h2> 
    <Gallery />
    <div className="top"> <a href="#HEADER"> Go To Top</a> </div>
    </div>
    <Footer />
    </div>
    )}

export default App
