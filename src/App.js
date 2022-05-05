import TitleBar from './components/TitleBar/TitleBar';
import Mohan from './assets/images/Mohan-muruge.jpg';
import './App.scss';


const App = () => {
  return (

   <div className="App">
      <TitleBar image={Mohan} /> 
    </div>

  );
}

export default App;
