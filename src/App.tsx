import './App.css';
import Step1 from './Step1';
import Step2 from './Step2';
import StepWithdraw from './StepWithdraw';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Lobbyman</h1>
        <p className='description'>
          A simple tool to allow DotDot ($DDD) holders to automate their votes. Giving them the best yields
          from bribes.
        </p>
        <p className='comment'>
          Created by the Kaali cartel
        </p>
      </header>

      <Step1 />
      <Step2 />
      <StepWithdraw />
    </div>
  );
}

export default App;
