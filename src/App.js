import ConfirmationBox from './components/Pages/ConfirmationBox/ConfirmationBox';
import ConfirmationBoxProvider from './components/Pages/ConfirmationBox/ConfirmationBoxProvider';
import { Index as Users } from './components/Pages/Users/Index';

function App() {
  return (
    <div className="App">
      <ConfirmationBoxProvider>
        <ConfirmationBox />
        <Users />
      </ConfirmationBoxProvider>
    </div>
  );
}

export default App;
