
import './App.css';
import {Result} from './Result'
import { Form } from './Form'
import { setDisplay } from './displaySlice';
import { Title } from './Title';


function App() {
  return (
    <div>
    <Title />
    <Form receiveData={setDisplay} />
    <Result />
  </div>
  );
}

export default App;
