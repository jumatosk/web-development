import React from 'react';

const costumer = [
	{
		id: 0,
		name: 'Hansen Owens',
	},
	{
		id: 1,
		name: 'Alexander Duffy',
	},
	{
		id: 2,
		name: 'Katina Jensen',
	},
	{
		id: 3,
		name: 'Everett Greene',
	},
	{
		id: 4,
		name: 'Nguyen Benson',
	},
	{
		id: 5,
		name: 'Smith Dixon',
	},
	{
		id: 6,
		name: 'Nancy Golden',
	},
	{
		id: 7,
		name: 'Liz Stafford',
	},
	{
		id: 8,
		name: 'Bush Kennedy',
	},
	{
		id: 9,
		name: 'Stokes Newton',
	},
	{
		id: 10,
		name: 'Farley Hodges',
	},
	{
		id: 11,
		name: 'Tami Riley',
	},
	{
		id: 12,
		name: 'Buchanan Kirk',
	},
	{
		id: 13,
		name: 'Casey Colon',
	},
	{
		id: 14,
		name: 'Toni Duran',
	},
];

const renderCostumer = (costumer) => {
	return (
		<div>
			<li key={`costumer-${costumer.id}`}><strong>Name:</strong> {costumer.name}</li>
			<p><strong>Id:</strong> {costumer.id}</p>
		</div>
	);
};

export default () => {
	return (
		<div>
			<ul>{costumer.map(renderCostumer)}</ul>
		</div>
	);
};
