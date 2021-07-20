import logo from './logo.svg';
import './App.css';
import FunComponent from './Component/functioncomponent';
import ClsComopnent from './Component/classcomoponent';
import FunctionComponent from './Component/functioncomponent2';
import ClassComponent from './Component/ClassComponent2';
import ChangeState from './Component/classcomponent3';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunComponent/>
        <ClsComopnent/>
        <FunctionComponent name="charan"></FunctionComponent>
        <ClassComponent/>
        <ChangeState ></ChangeState>
      </header>
    </div>
  );
}

export default App;
