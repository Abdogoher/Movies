import { Container } from 'react-bootstrap';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import MovieList from './Components/MovieList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetails from './Components/MovieDetails';
import MoviTitle from './Components/MoviTitle';


function App() {
  const [movies, setmovies] = useState([])
  const [pageCount, setpageCount] = useState(0)
  
  const getAllMovise = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar")
    setmovies(res.data.results)
    setpageCount(res.data.total_pages)
    // console.log(res.data.total_pages)
  }

  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`)
    setmovies(res.data.results)
    setpageCount(res.data.total_pages)
  }

  const search = async (word) => {
    if (word === "") {
      getAllMovise()
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`)
      setmovies(res.data.results)
      setpageCount(res.data.total_pages)
    }
  }

  useEffect(() => {
    getAllMovise();
  }, [])
  return (
    <div className="font color-body">
        <NavBar search={search} /> 
        <Container>
        <MoviTitle />
          <Router>
            <Routes>
            <Route path="/" element={<MovieList movies={movies} getPage={getPage} pageCount={pageCount} /> } />
            <Route path="/movie/:id" element={<MovieDetails /> } />
            </Routes>
        </Router>
        
        </Container>
    </div>
  );
}

export default App;
