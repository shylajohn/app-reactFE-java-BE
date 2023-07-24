import React, {useEffect, useId, useState} from 'react'

import {Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';



const AddEmployeeComponent = () => {
 
    const [employeeID, setemployeeID] = useState('')
    const [employeeName, setname] = useState('')
    const [emailId, setemailId] = useState('') 
    const [department, setdepartment] = useState('') 
    const [doj, setdoj] = useState('') 
    const history = useHistory();
    const {id} = useParams();
    
    
           const saveOrUpdateEmployee = (e) => {
                    e.preventDefault();
                    console.log(e);
                    

                    const employee = {employeeID, employeeName, emailId,department,doj}

                    if(id){

                    //  fetchData()
                        EmployeeService.updateEmployee(employeeID, employee).then((reponse) => {
                           

                          history.push('/employees')
                          window.location.reload();

                        }).catch(error => {
                            console.log(error)
                        })
                            
                    }else{
                        EmployeeService.createEmployee(employee).then((Response) => {
                            history.push('/employees');
                            
                            console.log(Response.data)
                           
                            window.location.reload();
                          
                        }).catch(error => {
                                console.log(error)
                        })

                    }    
             }
    
            //  const fetchData = async () => {
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

                useEffect(() => {
                    EmployeeService.getEmployeeById(employeeID).then((response) =>{
                        setemployeeID(response.data.employeeID)
                        setname(response.data.employeeName)
                        setemailId(response.data.emailId )
                        setdepartment(response.data.department)
                        setdoj(response.data.doj)
                    }).catch(error => {
                        console.log(error)
                    }) 



                }, [])     




 
    return (
        <div>
        <br /><br />
            
        <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Employee ID :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Employee ID"
                                        name = "empID"
                                        className = "form-control"
                                        value = {employeeID}
                                        onChange = {(e) => setemployeeID(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Employee Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Employee name"
                                        name = "EmployeeName"
                                        className = "form-control"
                                        value = {employeeName}
                                        onChange = {(e) => setname(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setemailId(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2">
                                    <label className = "form-label">Department Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Department Name"
                                        name = "department"
                                        className = "form-control"
                                        value = {department}
                                        onChange = {(e) => setdepartment(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Date Of Joining :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Enter DOJ"
                                        name = "doj"
                                        className = "form-control"
                                        value = {doj}
                                        onChange = {(e) => setdoj(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                                
                               
                            </form>
                            
                        </div>
                    </div>
                </div>

           </div>

       </div> 
  )
}
export default AddEmployeeComponent;