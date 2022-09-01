import UsersProvider from './components/Pages/Users/UsersProvider';
import UsersTable from './components/molecules/UsersTable';
import UsersForm from './components/molecules/UsersForm';
import UsersStatistics from './components/molecules/UsersStatistics';
import { Index as Users } from './components/Pages/Users/Index';

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
