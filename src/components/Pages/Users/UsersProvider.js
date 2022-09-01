import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { users } from '../../../data/users';
import { Wrapper } from './Users.styles';

const usersContext = createContext({});

const UsersProvider = ({ children }) => {
  const handleConfirmationBox = (message) => {
    return window.confirm(message);
  };

  const [usersData, setUsersData] = useState(users);
  const [sortedUsersData, setSortedUsersData] = useState(usersData);
  const [sortingMethod, setSortingMethod] = useState('default');

  const [userEditingFlag, setUserEditingFlag] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});

  const [userAddingFlag, setUserAddingFlag] = useState(false);

  const deleteUser = (userToDelete) => {
    if (handleConfirmationBox('Are you sure you want to delete the user?')) {
      if (usersData.includes(userToDelete)) {
        let tmpUsers = usersData.filter((user) => {
          if (user != userToDelete) {
            return user;
          }
        });
        setUsersData(tmpUsers);
      }
    }
  };

  const startEditingUser = (user) => {
    setUserToEdit(user);
    setUserEditingFlag(true);
  };
  const startAddingUser = () => {
    setUserAddingFlag(true);
  };

  const editUser = (userToEdit, editedUser) => {
    if (userEditingFlag) {
      usersData[usersData.indexOf(userToEdit)] = editedUser;
      setUserEditingFlag(false);
    } else {
      startEditingUser();
    }
  };

  const addUser = (userToAdd) => {
    setUsersData([...usersData, userToAdd]);
    setUserAddingFlag(false);
  };

  const cancelAddingOrEditing = () => {
    userAddingFlag ? setUserAddingFlag((p) => !p) : setUserEditingFlag((p) => !p);
  };

  const deleteAllUsers = () => {
    if (handleConfirmationBox('Are you sure you want to delete all users?')) {
      setUsersData([]);
    }
  };

  const sortUsers = (e) => {
    let method = typeof e === 'string' ? sortingMethod : e.target.value;
    switch (method) {
      case 'descending':
        const sortedDesc = [...usersData].sort((a, b) => b.salary - a.salary);
        setSortedUsersData(sortedDesc);
        setSortingMethod('descending');
        break;
      case 'ascending':
        const sortedAsce = [...usersData].sort((a, b) => a.salary - b.salary);
        setSortedUsersData(sortedAsce);
        setSortingMethod('ascending');
        break;
      default:
        setSortedUsersData(usersData);
        setSortingMethod('default');
    }
  };

  const getKey = () => {
    return Math.random();
  };

  useEffect(() => {
    sortUsers(sortingMethod);
  }, [usersData, userEditingFlag]);

  return (
    <Wrapper>
      <usersContext.Provider
        value={{
          usersData,
          sortedUsersData,
          getKey,
          deleteUser,
          deleteAllUsers,
          editUser,
          userToEdit,
          addUser,
          userEditingFlag,
          userAddingFlag,
          startAddingUser,
          startEditingUser,
          sortUsers,
          sortingMethod,
          cancelAddingOrEditing,
        }}
      >
        {children}
      </usersContext.Provider>
    </Wrapper>
  );
};

export const useUsersContext = () => useContext(usersContext);

export default UsersProvider;
