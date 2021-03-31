import React,{useEffect,useState} from 'react';
import axios from "axios";

export default function Healthhistory() {
    const [patienthistory,setPatienthistory]=useState([]);
    useEffect(() => {
            axios.get("http://localhost:8085/patient/get-all")
            .then(res =>setPatienthistory(res.data))
 
   },[])
    return (
        <div>
           <table className="Table" style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid' }}>
                <tr>
                    <th>Doctorid </th>
                    <th>Doctor name</th>
                    <th>Doctor username </th>
                    <th>Doctor password </th>
                    <th>Doctor qualification</th>
                    <th>Action</th>
                </tr>
                {
                    patienthistory.map((doctor) => {
                        return <tr>
                            <th>{doctor.id}</th>
                            <th>{doctor.firstName}</th>
                            <th>{doctor.lastName}</th>
                            <th>{doctor.contactNo}</th>
                             <th>{doctor.addharNo}</th>
                            <th>{doctor.address}</th>
                            <th>{doctor.bloodGroup}</th>
                            <button onClick={async () => {
                                //https://jsonplaceholder.typicode.com/users
                                const URL = "http://localhost:8085/treatment/{id}";
                                const response = await axios.delete(URL, {
                                   doctor:patienthistory,
                                // doctor:firstName,
                            });
                              }}>Delete</button>
                        </tr>
                    })
                }</table>
        </div>
    )
}
