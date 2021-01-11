import React, { useEffect, useState } from 'react';
import Movie from './components/Movie';
import { FEATURED_API, SEARCH_API } from './util/apiUrls';

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		getMovies(FEATURED_API);
	}, []);

	const getMovies = (API) => {
		fetch(API)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
			});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if (searchTerm) {
			getMovies(SEARCH_API + searchTerm);
			setSearchTerm('');
		}
	};

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	};

	return (
		<>
			<header>
				<form action="" onSubmit={handleOnSubmit}>
					<input
						className="search "
						type="search"
						placeholder="Buscar..."
						value={searchTerm}
						onChange={handleOnChange}
					/>
				</form>
			</header>
			<div className="movie-container">
				{movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
			</div>
		</>
	);
}

export default App;
