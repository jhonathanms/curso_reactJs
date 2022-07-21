import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import './App.css';
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import RenderizarTemplatesForaDoReturn from './components/RenderizarTemplatesForaDoReturn';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpression />
      <MyComponents />
      <Events />
      <RenderizarTemplatesForaDoReturn />
      <Challenge />
    </div>
  );
}

export default App;
