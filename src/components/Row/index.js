import React from 'react';

function Row({ directory }) {
    const { first, last, email, phone } = directory;
    return (
        <tr>
            {/* Should the number be its own component? */}
            <th scope="row">1</th>
            <td>{first}</td>
            <td>{last}</td>
            <td>{email}</td>
            <td>{phone}</td>
        </tr>
    )
}

export default Row;

// {
//     directory.map((employee, index) => (
//         <tr>
//             <th scope="row">{index + 1}</th>
//             <td>{employee.name.first}</td>
//             <td>{employee.name.last}</td>
//             <td>{employee.email}</td>
//             <td>{employee.cell}</td>
//         </tr>
//     ))
// }


// function Row() {
//     const [num, setNum] = useState(0);
//     const [first, setFirst] = useState("");
//     const [last, setLast] = useState("");
//     const [email, setEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [directory, setDirectory] = useState([]);

//     useEffect(() => {

//         API.fullDirectory()
//             .then(res => {
//                 if (res.data.status === "error") {
//                     throw new Error(res.data.message)
//                 }
//                 const employees = res.data.results;
//                 setDirectory(employees);
//                 //renderEmployees();
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, []);

//     console.log(directory);
//     // State stuff here

//     return (
//         <tbody>
//             {/* <tr>
//                 <th scope="row">1</th>
//                 <td>Mark</td>
//                 <td>Otto</td>
//                 <td>@mdo</td>
//                 <td>555-555-1234</td>
//             </tr> */}
//             {/* {
//                 directory.map(employee => (
//                     <tr>
//                         <th scope="row">{setNum(num + 1)}</th>
//                         <td>{employee.name.first}</td>
//                         <td>{employee.name.last}</td>
//                         <td>{employee.email}</td>
//                         <td>{employee.cell}</td>
//                     </tr>
//                 ))
//             } */}

//             <tr>
//                 <th scope="row">{setNum(num + 1)}</th>
//                 <td>{directory[0].name.first}</td>
//                 <td>{directory[0].name.last}</td>
//                 <td>{directory[0].email}</td>
//                 <td>{directory[0].cell}</td>
//             </tr>


//         </tbody>
//     );
// }

// export default Row;