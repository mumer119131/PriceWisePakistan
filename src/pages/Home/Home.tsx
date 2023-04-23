import Carousel from "../../components/Carousel/Carousel"
import Gallery from "../../components/Gallery/Gallery"

const Home = () => {
  const query = 'random'
  return (
    <div>
        <Carousel />
        <Gallery query={query}/>
    </div>
  )
}

export default Home