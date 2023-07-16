import image from './plan.jpg';
import './App.css';
import { List } from './List';

function App() {
  return (
      <div className='container'>
        <div className='main'>
      <img src={image} width="150px" alt='plan'/>
      </div>
      <div className='main'>
      <h1>MY PLAN:</h1>
      </div>
      <List />
    </div>
  );
}

export default App;
