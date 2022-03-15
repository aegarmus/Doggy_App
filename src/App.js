import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    class App extends Component {
      state= {
          Razaslista: null,
          RazaSelecionada: null,
          error: false
      }
     componentrazas() {
         this.fetchTotalRazas();
     }
     fetchAllBreeds = async () => {
         try {
          const response = await fetch('https://dog.ceo/api/breeds/list/all');
          if (response.ok) {
              const data = await response.json();
              this.setState({
                Razaslista: Object.keys(data.message)
              })
          } else {
              this.setState({
                  error: true
              })
              alert('Oh! lo sentimos no podemos desplegar los datos')
          }
          } catch (e) {
              this.setState ({
                  error: true
              })
              alert('Oh! lo sentimos no podemos desplegar los datos')
          }
         }
         selectHandler = (breed) => {
             this.setState({
                RazaSelecionada: breed
             })
         }
      
  }
  
  );
}

export default App;
