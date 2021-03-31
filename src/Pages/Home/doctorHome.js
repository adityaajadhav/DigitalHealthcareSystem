import React from 'react'
import DoctorAppointmentsTable from '../Appointment/doctorAppointmentTable'

export default function DoctorHome(props) {
    return (
        <div>
            

            <h1>Doctor Home</h1>
            <DoctorAppointmentsTable {...props}/>

        </div>
    )
}
