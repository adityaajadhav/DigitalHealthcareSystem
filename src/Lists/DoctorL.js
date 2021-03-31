import { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
function DoctorL() {
    const [info, setInfo] = useState([]);
    const [redir, setRedir] = useState(false)
    useEffect(() => {
        async function getData() {
            //https://jsonplaceholder.typicode.com/users
            const URL = "http://localhost:8085/doctor/get-all";
            const response = await axios.get(URL).catch(console.error);
            setInfo(response.data);
            console.log(response.data);
        }
        getData();
    }, []);
    if (redir) {
        return (<Redirect to='/Addremovehospitals' />
        )
    }
    return (
        <div>
            <h1>All Doctors:</h1><br />
            <button onClick={() => {
                setRedir(true)
            }}
            >Add Doctor</button><br />
            <br />
            <table className="Table" style={{ "borderWidth": "1px", 'borderColor': "#aaaaaa", 'borderStyle': 'solid','width': '100%' }}>
                <tr>
                    <th>Doctorid </th>
                    <th>Doctor name</th>
                    <th>Doctor username </th>
                    <th>Doctor password </th>
                    <th>Doctor qualification </th>
                    {/* <th>Doctor Hospital id </th>
                    <th>Doctor Hospital Name </th> */}
                    <th>Action</th>
                </tr>

                {
                    info.map((doctor) => {
                        return <tr>
                            <th>{doctor.id}</th>
                            <th>{doctor.firstName}</th>
                            <th>{doctor.lastName}</th>
                            <th>{doctor.password}</th>
                            <th>{doctor.qualification}</th>
                            {/* <th>{doctor.hospital.id}</th>
                            <th>{doctor.hospital.hospitalName}</th> */}
                            <button onClick={async () => {
                                //https://jsonplaceholder.typicode.com/users
                                const URL = "http://localhost:8085/doctor/{doctor.id}";
                                const response = await axios.delete(URL, {
                                   doctor:info,
                                 // doctor:firstName,
                            });
                            }}
                            >Delete</button>
                        </tr>
                    })
                }</table>
        </div>
    )
} export default DoctorL;

// -------------------------
// import React, { useState,useEffect } from "react";
// import Course from "./Course"
// import base_url from "./../api/bootapi";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Allcourse = () => {

//     useEffect(() => {
//         document.title = "All Courses"
//     }, []);
// //function to call server;
//     const getAllCourseFromServer = () => {
//         axios.get(`${base_url}/courses`).then(
//             (response) => {
//                 //success
//                 //console.log(response);
//                 console.log(response.data);
//                 toast.success("courses has been loaded", {
//                     position: "bottom-center"
//                 });
//                 setCourses(response.data);
//             },
//             (error) => {
//                 //for error
//                 console.log(error);
//             }
//         );
//     };

//     //calling loading course function
//     useEffect(() => {
//         getAllCourseFromServer()
//     }, []);

//     const [courses, setCourses] = useState([
//         // {title:"Java Course",description:"this is demo for java course"},
//         // {title:"dJango Course",description:"this is demo for django course"},
//         // {title:"React Course",description:"this is demo for ReactJS course"},
//         // {title:"Angular Course",description:"this is demo for Angular course"},
//     ])

//     const updateCourses = (id) => {
//         setCourses(courses.filter((c) => c.id != id));
//     }
//     return (
//         <div>
//             <h1>All Courses</h1>
//             <p>List of Courses are as follows</p>
//             {
//                 courses.length > 0 ? courses.map((item) => <Course key={ item.id} course={item} update={updateCourses} />) :
//                     "No courses"
//             }
//         </div>
//     )
// }
// export default Allcourse;