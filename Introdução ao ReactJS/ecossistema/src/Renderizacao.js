import React, { useState } from 'react';

export default () => {
	const [render, setRender] = useState(false);

	const ContentA = () => (
		<div>
			<h2>Content A</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga optio officiis iure eveniet
				vitae consectetur omnis minima laudantium nostrum at deleniti, hic ullam quia voluptatem, molestiae
				labore dignissimos corrupti?
			</p>
		</div>
	);

	const ContentB = () => (
		<div>
			<h2>Content B</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse aliquid consequatur nobis
				recusandae commodi amet voluptatum magni nostrum voluptates? Ipsum, consequatur molestiae quam mollitia
				necessitatibus fuga deleniti iure? Aspernatur!
			</p>
		</div>
	);

	return (
		<div>
			<p>Este é um conteúdo de renderização condicional</p>
            {ContentA()}
			<button onClick={() => setRender(!render)}>{render ? 'Hide' : 'Show'} Content B</button>
            {render && ContentB()}
		</div>
	);
};
