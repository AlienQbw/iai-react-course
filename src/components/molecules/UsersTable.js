import { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import Select from '../atoms/Select';
import { useUsersContext } from '../Pages/Users/UsersProvider';

const UsersTable = () => {
  const {
    sortedUsersData,
    getKey,
    deleteUser,
    startEditingUser,
    startAddingUser,
    sortUsers,
    sortingMethod,
    deleteAllUsers,
  } = useUsersContext();

  const [memorizedHeaders, setMemorizedHeaders] = useState([]);

  const returnPropertyValues = (user) => {
    return Object.getOwnPropertyNames(user).map((prop) => {
      if (typeof user[prop] === 'object') {
        let el = Object.entries(user[prop]).map((skill) => (
          <li key={getKey()}>
            {skill[0]}: {skill[1]}
          </li>
        ));
        return <td key={getKey()}>{el}</td>;
      }
      return <td key={getKey()}>{user[prop]}</td>;
    });
  };

  const returnPropertyNames = (user) => {
    return Object.getOwnPropertyNames(user).map((prop) => <th key={getKey()}>{prop}</th>);
  };

  useEffect(() => {
    setMemorizedHeaders(returnPropertyNames(sortedUsersData[0]));
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>{sortedUsersData[0] ? returnPropertyNames(sortedUsersData[0]) : memorizedHeaders}</tr>
        </thead>
        {sortedUsersData.length ? (
          <tbody>
            {sortedUsersData.map((user) => (
              <tr key={getKey()}>
                {returnPropertyValues(user)}
                <td>
                  <Button value="Edit" action={startEditingUser} props={user} />
                </td>
                <td>
                  <Button value="Delete" action={deleteUser} props={user} />
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td style={{ border: 'none' }}></td>
            </tr>
          </tbody>
        )}
      </table>

      <Button value="Add User" action={startAddingUser} />
      <Button value="Delete All Users" action={deleteAllUsers} />
      <Select
        action={sortUsers}
        options={['default', 'descending', 'ascending']}
        value={sortingMethod}
      />
    </div>
  );
};

export default UsersTable;
