import UsersProvider from './components/Pages/Users/UsersProvider';
import UsersTable from './components/molecules/UsersTable';
import UsersForm from './components/molecules/UsersForm';
import UsersStatistics from './components/molecules/UsersStatistics';

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <UsersForm />
        <h1>Users</h1>
        <UsersTable />
        <UsersStatistics />
      </UsersProvider>
    </div>
  );
}

export default App;
