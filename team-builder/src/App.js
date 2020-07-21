import React, {useState} from 'react';
import Form from './Components/Form'
import logo from './logo.svg';
import styled from 'styled-components'
import './App.css';

const initialTeamMemberList = [
  {
      firstname: 'Michael',
      lastname: 'Hernandez',
      role: 'Lead',
      email: 'HernandezM.Dev@gmail.com',
  },
]

const initialFormValue = {
  firstname: '',
  lastname: '',
  email: '',
  //Drop Down
  role: '',
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;

  header {
    padding-right: 2%;
    padding-left: 2%;
    width: 95%;
    display: flex;
    justify-content: space-between;
  }
`

function App() {
const [teamMembers, setTeamMember] = useState(initialTeamMemberList)
const [formValues, setFormValues] = useState(initialFormValue)

const updateForm = (inputName, inputValue) => {
  const updatedFormValues = {...formValues, [inputName]: inputValue}
  setFormValues(updatedFormValues)
}

const submitForm = () => {
  debugger
  const newMember = {
    firstname: formValues.firstname.trim(),
    lastname: formValues.lastname.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  }
  if(!newMember.firstname || !newMember.lastname ||!newMember.email || !newMember.role) return
  
  setTeamMember([newMember,...teamMembers]);
  console.log(teamMembers)
  setFormValues(initialFormValue);

}






  return (
    <StyledApp className="App">
      <header>
        <h1>Team Builder</h1>
        <h3>By Michael Hernandez</h3>
      </header>
      <Form values={formValues} update={updateForm} submit={submitForm}/>
      {
           teamMembers.map(member => {
            return (
              <p>{member.firstname}</p>
            )
          })

      }
    
    </StyledApp>
  );
}

export default App;
