import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import moviesJson from './movies.json';

function App() {

	let movies = moviesJson;	

  return (

	<PageWrapper>

		{
			movies.map(movie => 
				<Movie title= {movie.title} calification={movie.calification} director={movie.calification} actors={movie.actors} date={movie.date} duration={movie.duration} img={movie.img}>
					{movie.description}
				</Movie>
				
		)}					

	</PageWrapper>
	
  );
}

export default App;
