import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
// import Media from './src/playlist/componentes/Media';

// const app = document.getElementById('app')
//const holaMundo = <h1>Hola buenas, que tal, aqui estamos</h1>;
const homeContainer = document.getElementById('home-container');
//ReactDOM render(que voy a renderizar, donde lo voy a renderizar)

ReactDOM.render(<Home data={data}/> , homeContainer);


//console.log('Hola Mundo!')
