import React, { Component } from 'react';
import posts from './posts'


// Modifica el componente App para implmentar la funcionalidad requerida

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filteredPosts: posts,
      value: ''
    };
    this.filter = this.filter.bind(this);
  }
  filter = (event) =>
  {
    this.setState(
      {
        value:event.target.value,
        filteredPosts: posts.filter(x => 
          x.title.toUpperCase().includes(event.target.value.toUpperCase()) > 0)
      })
  }
  render() {
    const {filteredPosts,filter} = this.state;
    return (
      <div>
        <div className="filter">
          <input type="text" value={filter} onChange={this.filter} placeholder="Ingresa el término de búsqueda" />
        </div>
        <ul>
          {filteredPosts.map(
            (element, index) => 
            {
              return(            
                <li key={index}>
                  <a href={element.url}><img alt={element.title} src={element.image} /></a>
                  <p>{ element.title }</p>
                </li>
              )
            }
          )}
        </ul>
      </div>
    )
  }
}


export default App


