import React from 'react';
import './search.css';

// function Search(props) {
//   return (
//
//   )
// }

const Search = (props) => (
  <form
      className     = "Search"
      onSubmit      = {props.handleSubmit}>
    <input
      ref           = {props.setRef}
      className     = "Search-input"
      placeholder   = "¿Qué quieres buscar?"
      type          = "text"
      name          = "search"
      onChange      = {props.handleChange}
      value         = {props.value}/>
  </form>
)

export default Search
