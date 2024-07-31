const key = "102a002846ef9bd6c1e5c28d806b478a"
const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=all`

const FecthData = async ()=>{
  const getData = await fetch(url);
  return getData;
}

export default FecthData;