import { useEffect, useState } from 'react';
import Table from '../atoms/Table';
import { useUsersContext } from '../Pages/Users/UsersProvider';

const UsersStatistics = () => {
  const { usersData, getKey } = useUsersContext();
  const [tableData, setTableData] = useState([[]]);

  const updateUsersStatistics = () => {
    let salary = getTotalSalary();
    let skills = getTotalSkillsCount();
    let skillsElements = Object.entries(skills).map((skill) => (
      <p key={getKey()}>
        {skill[0]}: {skill[1]}
      </p>
    ));
    setTableData([[salary, skillsElements]]);
  };

  const getTotalSalary = () => {
    if (usersData.length > 0) {
      return usersData.map((user) => user.salary).reduce((p, c) => p + c);
    }
  };
  const getTotalSkillsCount = () => {
    let skills = [];
    let skillsArray = usersData.map((user) => Object.getOwnPropertyNames(user.skills));
    for (let i = 0; i < skillsArray.length; i++) {
      skills = skills.concat(skillsArray[i]);
    }
    const count = {};
    skills.forEach((el) => {
      count[el] = (count[el] || 0) + 1;
    });

    return count;
  };

  useEffect(() => {
    updateUsersStatistics();
  }, [usersData, getTotalSalary()]);

  return <Table headers={['Total Salary', 'Skills sumary']} data={tableData} />;
};

export default UsersStatistics;
