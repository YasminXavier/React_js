import Fragment from './components/Fragment';
import './App.css';
import FirstComponent from './components/FirstComponent';
import RenderCond from './components/RenderCond';
import Container from './components/Container';

/* DICA!!!: Deixar o Console aberto para evr os erros */
/* Componente principal da tela */

function App() {
  return (
    <div className="App">
      <h1> Aprendendo React</h1>
      <FirstComponent/> 
      <hr/>
      <RenderCond x = {10}/>
      <hr/>
      <Fragment/>
      <hr/>
      <Container>
        <p> Esse é o filho container </p>
      </Container>
    </div> 
  );
}

export default App;
/* <FirstComponent/> foi puxada e retornada aqui como componente */