import React from 'react'
import styled from 'styled-components'

const FullForm = styled.form`
display: flex;
flex-direction: column;

`
const FormDiv = styled.div`
    display: flex;
    width: 50%;
    flex-wrap: wrap;
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    
    button {
        width: 10%;
    }
`

export default function Form(props){

    const {values, update, submit} = props


    const onChange = evt =>{
        const name = evt.target.name
        const value = evt.target.value
        update(name, value)
    }

    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }

    return (
        <FullForm className='form container' onSubmit={onSubmit}>
            <h2>Add New Team Members</h2>

            <FormDiv className='form-inputs'>
                <h3>New Member Details</h3>
                <label>First Name: &nbsp;
                    <input 
                    // id='firstNameInput'
                    name='firstname'
                    type='text'
                    placeholder='First Name'
                    maxlength='15'
                    value={values.firstname}
                    onChange={onChange}
                    />
                </label>

                <label>Last Name: &nbsp;
                    <input 
                    // id='lastNameInput'
                    name='lastname'
                    type='text'
                    maxlength='15'
                    placeholder='Last Name'
                    value={values.lastname}
                    onChange={onChange}
                    />
                </label>

                <label>E-mail Address: &nbsp;
                    <input 
                    // id='emailInput'
                    name='email'
                    type='email'
                    placeholder='E-mail Address'
                    maxlength='20'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>

                <label>Role: &nbsp;
                    <select name='role'
                     value={values.role}
                     onChange={onChange}
                    >
                        <option disabled value=''>Select a Role</option>
                        <option value='backend'>Backend Engineer</option>
                        <option value='frontend'>Frontend Engineer</option>'
                        <option value='designer'>Designer</option>
                        <option value='datascience'>Data Science</option>
                        <option value='machinelearning'>Machine Learning</option>
                        <option value='marketing'>Marketing</option>
                    </select>
                </label>

                <button disabled={!values.firstname || !values.lastname ||!values.email || !values.role}>Submit</button>
            </FormDiv>


        </FullForm>
    )
}