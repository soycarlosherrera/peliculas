

import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MoviesList from './MoviesList';
import Blog from './Blog';

function App() {	
  return (	
  	<Router>
		<Routes>
			<Route path="/" element={<MoviesList/>}/>
			<Route path="/blog" element={<Blog/>}/>
		</Routes>		
	</Router>
  );
}

export default App;
