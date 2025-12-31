import './App.css';
import ToDo from './components/ToDo.jsx';
import {store} from './app/store.js';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <ToDo />
      </Provider>
    </>
  )
}

export default App
