import { useEffect } from 'react';
import { useStorage } from './hooks/useStorage';
import './App.css';

function App() {
  const [animal, setAnimal] = useStorage("animal", "Não possui animal");
  const [comida, setComida] = useStorage("comida", "Não possui comida");

  function handleClickAnimal(event) {
    const animal = event.target.innerText;
    setAnimal(animal);
  }

  function handleClickComida(event) {
    const comida = event.target.innerText;
    setComida(comida);
  }
  
  useEffect(() => {
    console.log("O animal foi alterado para", animal);
  }, [animal]);

  // useEffect(() => {
  //   console.log(comida);
  // }, [comida]);

  return (
    <div className="App">
      <h3>Aula 06</h3>
      <button onClick={({target}) => setAnimal(target.innerText)}>Cachorro</button>
      <button onClick={handleClickAnimal}>Gato</button>
      <button onClick={handleClickAnimal}>Elefante</button>
      <br />
      <br />
      {animal}
      <hr />

      <button onClick={handleClickComida}>Banana</button>
      <button onClick={handleClickComida}>Feijoada</button>
      <button onClick={handleClickComida}>Pastel</button>
      <br />
      <br />
      {comida}
    </div>
  );
}

export default App;
