import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import moviesJson from './movies.json';
import Pagination from './Pagination';
import { useState } from 'react';

function App() {

	const [actualPage, setActualPage] = useState(1);

	const TOTAL_FOR_PAGE = 7;

	let movies = moviesJson;

	const uploadMovies = ()=>{

		movies = movies.slice(
			(actualPage-1)*TOTAL_FOR_PAGE,
			actualPage*TOTAL_FOR_PAGE
		);

	}	

	const getTotalPages = ()=>{
		let totalAmountMovies = moviesJson.length;
		return Math.ceil(totalAmountMovies/TOTAL_FOR_PAGE);		 
	}

	uploadMovies();

  return (

	<PageWrapper>

		{
			movies.map(movie => 
				<Movie title= {movie.title} calification={movie.calification} director={movie.calification} actors={movie.actors} date={movie.date} duration={movie.duration} img={movie.img}>
					{movie.description}
				</Movie>
				
		)}

		<Pagination page={actualPage} total={getTotalPages()} onChange={(page)=>{
			setActualPage(page)
		}} />					

	</PageWrapper>
	
  );
}

export default App;
