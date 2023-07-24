
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import EmployeeService from '../services/EmployeeService'


const ListEmployeeComponent = () => {
  const [employees, setEmployees]  = useState([])
    
  useEffect(() => {

       getAllEmployees();

     }, [])

    const getAllEmployees = () => {
      EmployeeService.getAllEmployees().then((response) => {
        setEmployees(response.data)
        console.log(response.data);
      
      }).catch(error =>{
         console.log(error);
     })
      
    }

    const deleteEmployee = (employeeID) => {
      EmployeeService.deleteEmployee(employeeID).then((response) => {
      getAllEmployees();
     
    
    
      }).catch(error =>{
          console.log(error);
      })
       
    }

  //   const fetchData = async () => {
  //     EmployeeService.getEmployeeById(employeeID).then((response) =>{
  //         console.log(response.data);
  //         setemployeeID(response.data.employeeID)
  //         setname(response.data.employeeName)
  //         setemailId(response.data.emailId )
  //         setdepartment(response.data.department)
  //         setdoj(response.data.doj)
  //     }).catch(error => {
  //      console.log(error)
  //            }) 


  //  }
   const refresh = async => {
    

   }



    return (
    <div className="container"  >
      
      <h1 className="text-center"> List Employees </h1>
        <Link to ="/add-employee" className='btn btn-primary mb-2'> Add Employee </Link>
        <table className='table table-bordered table-striped'>
          <thead>
          <tr>
      <th>Employee ID</th>
      <th>Employee Name</th>
      <th>Employee Department</th>
      <th>Employee Email Id</th>
      <th>Employee DOJ</th>
      <th>Action</th>
    </tr>
          </thead>
          <tbody>
            {
            employees.map(
              employee =>
                <tr key = {employees.id}>
                    <td>{employee.employeeID} </td>
                    <td>{employee.employeeName} </td>
                    <td>{employee.department} </td>
                    <td>{employee.emailId} </td>
                    <td>{employee.doj} </td>
                    <td>
                     
                     <Link className="btn btn-info" onClick ={refresh()} to={`/edit-employee/${employee.employeeID}`} >Update</Link>
                      <button className = "btn btn-danger" onClick = {() => deleteEmployee(employee.employeeID)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                  
                    </td>
                    
                </tr>
            )
}
          </tbody>
        </table>
      
    </div>
  )
}

export default ListEmployeeComponent;