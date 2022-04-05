import './App.css';

function App() {

  function getFilmes() {
    const options = {
      method: "POST",
      body: JSON.stringify('[{ "nome": "Filmezinho", "diretor": "Diretor do Filme" }]')
    }

    fetch("https://ghibliapi.herokuapp.com/films", options)
      .then((resp) => {
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log("finalizou");
      })

    // console.log(response);
  }

  return (
    <div className="App">
      <h3>Aula 06</h3>      
      <button onClick={getFilmes}>Request</button>
      <br />
      <br />
    </div>
  );
}

export default App;
