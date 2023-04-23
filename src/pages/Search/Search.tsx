import { useParams } from "react-router";



const Search = () => {
  // add the query type to the useParams hook
  const { query } = useParams();
  return (
    <div>{query}</div>
  )
}

export default Search