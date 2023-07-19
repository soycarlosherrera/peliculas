import logo from '../logo.svg';
import '../App.css';
import Movie from './Movie';
import PageWrapper from './PageWrapper';
import moviesJson from '../movies.json';
import Pagination from './Pagination';
import { useEffect, useState } from 'react';

function MoviesList() {

	const [actualPage, setActualPage] = useState(1);
	//const [movies1, setMovies] = useState([]);

	//useEffect(()=>{
	//	searchMovies();
	//},[]);

	const TOTAL_FOR_PAGE = 7;

	let movies = moviesJson;

	//Debido a que el json del servidor esta en español y en el archivo movies se capturan los valores en ingles.
	
	//const searchMovies = async () => {
	//	let url = 'https://lucasmoy.dev/data/react/peliculas.json';
//
	//    let result = await fetch(url, {
	//		"method":'GET',
	//		"mode":'no-cors',
	//		"headers":{
	//			"Accept":'application/json',
	//			"Content-Type":'application/json'
	//		}
	//	});
//
	//	let json = await result.json();
//
	//	alert(json);
	//}
//
	//searchMovies();


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

export default MoviesList;
