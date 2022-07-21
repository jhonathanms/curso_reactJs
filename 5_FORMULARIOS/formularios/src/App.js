import logo from './logo.svg';
import './App.css';
import MyForms from './components/MyForms';

function App() {
  return (
    <div className="App">
      <MyForms user={{login: 'Jhonathan', senha:'88137903', obs:'teste'}} />
    </div>
  );
}

export default App;
