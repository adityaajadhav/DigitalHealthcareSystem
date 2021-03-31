import {useState,useEffect} from "react";
import axios from "axios";
function Doctorslist(){
     const [info,setInfo]=useState([]);
     useEffect(()=>{
       async function getData(){
         //
         const URL="http://localhost:8085/doctor/get-all";
             const response= await axios.get(URL).catch(console.error);
           setInfo(response.data);
            // console.log(response.data);
         }
         getData();
     });
 return(
        <div>
            All Doctors:
            { 
             <ul>
                 {
                 info.map((doctor) => {
                 return <li>Name:{doctor.firstName}
                 Id:{doctor.id}
                 Active:{doctor.active} 
                 Emailid:{doctor.emailId}
                 {doctor.lastName} 
                 {doctor.password}{doctor.qualification}{doctor.speciality}{doctor.hospitalId}</li>
                  })
                 }
             </ul> 
             }
        </div>
    )
}export default Doctorslist;
 
