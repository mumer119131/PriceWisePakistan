import Gallery from "../../components/Gallery/Gallery"

const Home = () => {
  const query = 'random'
  return (
    <div>
        <Gallery query={query}/>
    </div>
  )
}

export default Home