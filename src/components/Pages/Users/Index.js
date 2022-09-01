import UsersForm from '../../molecules/UsersForm';
import UsersStatistics from '../../molecules/UsersStatistics';
import UsersTable from '../../molecules/UsersTable';
import UsersProvider from './UsersProvider';

export const Index = () => {
  return (
    <UsersProvider>
      <UsersForm />
      <h1>Users</h1>
      <UsersTable />
      <UsersStatistics />
    </UsersProvider>
  );
};
