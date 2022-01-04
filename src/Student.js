import React from 'react'
import { Link, NavLink,  } from 'react-router-dom'
import './studentStyle.css'
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
// import { Paper } from '@material-ui/core';

function Student() {
    function CreateStudentDate(name,age,course,batch,change){
        return{name,age,course,batch,change}
    }

    const rows=[
        CreateStudentDate('Naruto','21','MERN','September',<NavLink to='#'>Edit</NavLink>),
        CreateStudentDate('Kakashi','24','MEAN','October',<NavLink to='#'>Edit</NavLink>),
        CreateStudentDate('Itachi','22','MERN','September',<NavLink to='#'>Edit</NavLink>),
        CreateStudentDate('Obito','22','MERN','October',<NavLink to='#'>Edit</NavLink>),
        CreateStudentDate('Pakun','17','MEAN','September',<NavLink to='#'>Edit</NavLink>),
        CreateStudentDate('Kuruma','30','MERN','October',<NavLink to='#'>Edit</NavLink>)
    ]

    return (
        <div>
            <h1 className='heading'>Students Details</h1>
            <Link className='addStudentBtn' to='#'>Add new student</Link>
            <div className="TableInfo">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Course</TableCell>
                                <TableCell>Batch</TableCell>
                                <TableCell>Change</TableCell>
                            </TableRow>
                        </TableHead>
                            <TableBody>
                                {rows.map((row)=>(
                                    <TableRow key={row.name}>
                                        <TableCell>{row.name} </TableCell>
                                        <TableCell>{row.age}</TableCell>
                                        <TableCell>{row.course}</TableCell>
                                        <TableCell>{row.batch}</TableCell>
                                        <TableCell>{row.change}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
console.log("jdhjhf");
export default Student
  
