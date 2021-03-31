import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

function HospitalL() {
    const [hospitalinfo, setHospitalinfo] = useState([]);
    const [addhospi, setAddhospi] = useState(false)
   // const [update, setUpdate] = useState(false);
    const [dele, setDele] = useState(false);
    useEffect(() => {
        async function getData() {
            //https://jsonplaceholder.typicode.com/users
            const URL = "http://localhost:8085/hospital/get-all";
            const response = await axios.get(URL).catch(console.error);
            // setHospitalinfo(response.data);
            // console.log(response.data);
        }
        getData();
    }, []);
    if (addhospi) {
        return <Redirect to='/Addhospitals' />
    }
    // if (update) {
    //     return <Redirect to='/Addhospitals' />
    // }
    if (dele) {
        return <Redirect to='/HospitalL'/>
    }
    return (
        // <div>
        //     <h1> All Hospitals:</h1>
        //     <button onClick={() => {
        //         setAddhospi(true)
        //     }}>Add hospital</button>
        //     <br />
        //     <br />
        //     <table className="Table" style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid','width': '100%' }}>
        //         <tr>
        //             <th>HospitalId</th>
        //             <th>Hospital EmailId </th>
        //             <th>HospitalContactNo </th>
        //             <th>Hospital Name </th>
        //             <th>Hospital Address </th>
        //             <th>Action</th>
        //         </tr>
        //         {
        //             hospitalinfo.map((hospital,) => {
        //                 return <tr >
        //                     <th>{hospital.id}</th>
        //                     <th>{hospital.emailId}</th>
        //                     <th>{hospital.hospitalContactNo}</th>
        //                     <th>{hospital.hospitalName}</th>
        //                     <th>{hospital.hospitaladdress}</th>
        //                     {/* <button
        //                     //d/{id}
        //                     >Delete</button> */}
        //                     <button onClick={async () => {
        //                         //https://jsonplaceholder.typicode.com/users
        //                         const URL = "http://localhost:8085/hospital/delete/{id}";
        //                         const response = await axios.delete(URL, {
        //                             hospitalinfo:hospitalinfo
        //                         });
        //                         setDele(true);
        //                     }}>Delete</button>
        //                     {/* <button onClick={() => {
        //                         localStorage.setItem('hospitalinfo', JSON.stringify(hospitalinfo))
        //                         setUpdate(true)
        //                     }}
        //                     >Update</button> */}
        //                 </tr>
        //             })
        //         } </table>

        // </div>
        <div>hello Hospitals</div>
    )
}
export default HospitalL;
