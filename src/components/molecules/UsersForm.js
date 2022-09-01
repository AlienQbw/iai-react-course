import { useEffect, useRef, useState } from 'react';
import { useUsersContext } from '../Pages/Users/UsersProvider';
import { InputRef } from '../atoms/InputRef';
import Label from '../atoms/Label';
import Button from '../atoms/Button';

const UsersForm = () => {
  const { userEditingFlag, userAddingFlag, addUser, editUser, userToEdit, cancelAddingOrEditing } =
    useUsersContext();

  const inputName = useRef({});
  const inputSurname = useRef({});
  const inputSalary = useRef({});
  const [skillsObj, setSkillsObj] = useState({});
  const inputSkill = useRef({});
  const inputSkillValue = useRef({});

  const clearFields = () => {
    inputName.current.value = '';
    inputSurname.current.value = '';
    inputSalary.current.value = '';
    inputSkill.current.value = '';
    inputSkillValue.current.value = '';
    setSkillsObj({});
  };

  const validateUserForm = () => {
    let validation = true;
    if (Object.keys(skillsObj).length === 0) {
      validation = false;
      alert('Please add at least, one skill');
    }
    if (!inputName.current.value || !inputSurname.current.value || !inputSalary.current.value) {
      validation = false;
      alert('Please fill out, all the fields');
    }
    return validation;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validateUserForm()) {
      let newUser = {
        name: inputName.current.value,
        surname: inputSurname.current.value,
        skills: skillsObj,
        salary: parseFloat(inputSalary.current.value),
      };
      if (userEditingFlag) {
        editUser(userToEdit, newUser);
      }
      if (userAddingFlag) {
        addUser(newUser);
      }
      clearFields();
    }
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (
      !inputSkill.current.value ||
      !inputSkillValue.current.value ||
      inputSkillValue.current.value === 0
    ) {
      alert('Please, provide correct skills data');
    } else {
      let tmpObj = skillsObj;
      tmpObj[inputSkill.current.value] = inputSkillValue.current.value;
      setSkillsObj({ ...skillsObj, ...tmpObj });
      inputSkill.current.value = '';
      inputSkillValue.current.value = '';
    }
  };

  const validateDataOnChange = () => {
    if (inputSkillValue.current.value > 10) {
      inputSkillValue.current.value = 10;
    }
    if (inputSkillValue.current.value < 0) {
      inputSkillValue.current.value = 0;
    }
    if (inputSalary.current.value < 0) {
      inputSalary.current.value = 0;
    }
  };

  useEffect(() => {
    if (Object.entries(userToEdit).length && userEditingFlag) {
      inputName.current.value = userToEdit.name;
      inputSurname.current.value = userToEdit.surname;
      inputSalary.current.value = userToEdit.salary;
      setSkillsObj(userToEdit.skills);
    }
  }, [userEditingFlag]);

  if (userAddingFlag || userEditingFlag) {
    return (
      <div
        className="users-form-container-overlay"
        onClick={(e) =>
          e.target.className === 'users-form-container-overlay' ? cancelAddingOrEditing() : ''
        }
      >
        <div className="users-form-container">
          <form>
            <div className="users-form-data-container">
              <Label labelFor={'name'}>Name:</Label>
              <InputRef ref={inputName} name="name" type="text" />

              <Label labelFor={'surname'}>Surname:</Label>
              <InputRef ref={inputSurname} name="surname" type="text" />

              <Label labelFor={'salary'}>Salary:</Label>
              <InputRef
                ref={inputSalary}
                name="salary"
                type="number"
                condition={validateDataOnChange}
              />
            </div>

            <div className="users-form-skills-container">
              <Label labelFor={'skill'}>Skill:</Label>
              <InputRef ref={inputSkill} name="skill" type="text" />

              <Label labelFor={'skill'}>Skill:</Label>
              <InputRef
                ref={inputSkillValue}
                name="skillValue"
                type="number"
                condition={validateDataOnChange}
              />

              {skillsObj ? (
                <p>{Object.entries(skillsObj).map(([key, val]) => `| ${key}: ${val} |`)}</p>
              ) : (
                ''
              )}
              <Button type="submit" value="Add" action={addSkill} />
            </div>

            <Button type="submit" value="Submit" action={submit} />
            <Button type="button" value="Cancel" action={() => cancelAddingOrEditing()} />
          </form>
        </div>
      </div>
    );
  }
};

export default UsersForm;
