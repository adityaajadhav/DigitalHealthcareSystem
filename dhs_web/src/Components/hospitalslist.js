import {useState,useEffect} from "react";
import axios from "axios";
function Hospitalslist(){
  const [info,setInfo]=useState([]);
  useEffect(()=>{
    async function getData(){
      //
      const URL="http://localhost:8085/hospital/get-all";
          const response= await axios.get(URL).catch(console.error);
        setInfo(response.data);
         // console.log(response.data);
      }
      getData();
  });
return(
        <div>
            All hospitals:
            { 
             <ul>
                 
                 {
                 info.map((hospitals) => {
                 return <li>Name:{hospitals.hospitalName}
                Id:{hospitals.id}
                 Emailid:{hospitals.emailId}
                Hospital name: {hospitals.hospitalContactNo} 
                Hospital Address: {hospitals.hospitaladdress}</li>
                  })
                 }
             </ul> 
             }
        </div>
    )
}
export default Hospitalslist;
  
 
