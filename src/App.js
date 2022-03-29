import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';
import './App.css';
import FormularioAPI from './componentes/FormularioAPI/FormularioAPI';
import Personas from './componentes/Personas/Personas';
import Nave from './componentes/Naves/Naves';

function App() {

  const [nombreParametro,setNombreParametro] = useState('');
  const [id,setId] = useState('');
  const [parametroEncontrado, setParametroEncontrado] = useState([]);

  //PARA LAS RUTAS
  const [allPersonas,setAllPersonas] = useState([])
  useEffect( () => {
    if( id !== '' ){
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then( respuesta => {
      setAllPersonas( (resultsPrev) => respuesta.data )
      console.log(respuesta,"primer fetch 1" )
    })
    .catch(err => {
      console.log(err)
      setAllPersonas(undefined)
    })}
  },[id]);

  useEffect( () => {
    if( id !=='' && nombreParametro !=='' ){
    axios.get(`https://swapi.dev/api/${nombreParametro}/${id}`)
    .then(respuesta => {
      setParametroEncontrado( (parametroPrev) => respuesta.data );
      console.log(respuesta.data, "primer fetch 2")
    })
    .catch(err => {
      console.log(err)
      setParametroEncontrado(undefined)
    })}
  },[nombreParametro,id]);

  console.log(parametroEncontrado, "AFUERA parametroEncontrado")
  console.log(allPersonas, "AFUERA allPersonas")

  // Metodos
  const buscarParametroPorId = (event) => {
    event.preventDefault();
    setNombreParametro( nombrePrev => event.target.nombreParametro.value );
    setId( nombrePrev => event.target.id.value );
    console.log("nombreParametro ",nombreParametro)
    console.log("id "+id)
  }

  return (
    <div className="App">

      <FormularioAPI buscarParametroPorId={buscarParametroPorId}></FormularioAPI>

        {
          ( nombreParametro === 'people' ) ?
          <Personas persona={parametroEncontrado}/> : ( nombreParametro === 'starships' ) ?
          <Nave nave={parametroEncontrado} /> : null
        }
      <BrowserRouter>

        <Route path="/:id" render={ (routeProps) => {
          setId(routeProps.match.params.id)
          console.log(id,"id obtenido")
          console.log(allPersonas,"allPersonas RUTA")
          return(
          <Personas persona={allPersonas} {...routeProps}/>)
          }} />

      </BrowserRouter>

    </div>
  );
}

export default App;
