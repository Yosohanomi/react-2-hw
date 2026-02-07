import { Greetings } from "./components/Greetings/Greetings";
import { Message } from "./components/Message/Message";
import { Button } from "./components/Button/Button";

function btnClickFunc () {
  console.log('Ви натиснули!');
}

function App() {
  return (
    <div className="App">
      <Greetings name='Ivan'/>
      <Message text='How are you doing today?'/>
      <Button onClick={btnClickFunc}/>
    </div>
  );
}

export default App;
