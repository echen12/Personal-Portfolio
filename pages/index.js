import NavBar from "../components/NavBar";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Blog from "../components/Blog";
import Footer from "../components/Footer";


const test = {
  name: "Edmond"
}

const Home = () => {
  return (
    <div>
      <NavBar />
      <Introduction />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home;