import React from 'react'
import PatientAppointmentsTable from '../Appointment/patientAppointmentTable'

export default function PatientHome(props) {
    return (
        <div>

            <h1>Patient Home</h1>
            <PatientAppointmentsTable {...props}/>

        </div>
    )
}
