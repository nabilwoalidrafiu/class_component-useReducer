import React, {useState, useReducer} from 'react';
import {patientReducer, patientState} from '../reducer/patientReducer'
import {useRef} from 'react';

const PatientManagement = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, patientState);
    const handleSubmit = event =>{
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        nameRef.current.value = ''
    }
    return (
        <div>
            <h1>Manage Doctor Chamber</h1>
            <h2>Patient Management: {state.patients.length}</h2>
            <form onSubmit= {handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.patients.map(pt => <li key={pt.id} onClick={()=>dispatch({type:'REMOVE_PATIENT', id: pt.id})}>{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;