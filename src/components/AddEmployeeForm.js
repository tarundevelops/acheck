import { Button, TextField } from "@mui/material"
import { EmployeePermission } from "./EmployeePermission"
import Emstyle from "../theme/addEmployee.module.css"


export default function AddEmployeeForm({employeeDetails,setEmployeeDetails}){
console.log(employeeDetails)
    let style= {
        
    }
    return(
        <div className={Emstyle.emfo} style={{borderRadius:"2rem"}}>
            <h2 >Employee Details</h2>
        <form>
            <div style={{display:"flex",justifyContent:"space-around",margin:"1rem"}}>

        <TextField
                width={"45%"}
                style={{color:"white"}}            
                label="First Name"
                name="first_name"
                onChange={(e)=>{setEmployeeDetails(prev=>{ return({...prev,first_name:e.target.value})})}}
                type="text"
                value={employeeDetails.first_name}
                />
        <TextField
                width={"45%"}
                style={{color:"white"}}            
                label="Last Name"
                name="last_name"
                onChange={(e)=>{setEmployeeDetails(prev=>{ return{...prev,last_name:e.target.value}})}}
                type="text"
                value={employeeDetails.last_name}
                />
                </div>
            <div style={{display:"flex",justifyContent:"space-around",margin:"1rem"}}>

        <TextField
                width={"45%"}
                style={{color:"white"}}            
                label="Email"
                name="email"
                onChange={(e)=>{setEmployeeDetails(prev=>{ return{...prev,email:e.target.value}})}}
                type="email"
                value={employeeDetails.email}
                />
       <div style={{width:"20%"}}></div>
                </div>
            <div style={{display:"flex",justifyContent:"space-around",margin:"1rem"}}>

        <TextField
                width={"45%"}
                style={{color:"white"}}            
                label="Password"
                name="password"
                onChange={(e)=>{setEmployeeDetails(prev=>{ return{...prev,password:e.target.value}})}}
                value={employeeDetails.password}
                type="password"
                />
        <TextField
                width={"45%"}
                style={{color:"white"}}            
                label="Confirm Password"
                name="conf"
                onChange={(e)=>{setEmployeeDetails(prev=>{ return{...prev,confirm_password:e.target.value}})}}
                type="password"
                value={employeeDetails.confirm_password}
                />
                </div>
            <div style={{display:"flex",justifyContent:"space-around",margin:"1rem"}}>

        <TextField
            
                style={{color:"white",width:"71%"}}            
                label="Address"
                name="address"
                onChange={(e)=>{setEmployeeDetails(prev=>{ return{...prev,address:e.target.value}})}}
                type={"text"}
                value={employeeDetails.address}
               
                />
        {/* <TextField
                width={"45%"}
                style={{color:"white"}}            
                label="First Name"
                name="first_name"
                onChange={()=>{}}
                type="text"
                /> */}
                </div>
            <div style={{display:"flex",justifyContent:"space-around",margin:"1rem"}}>

        <TextField
        sx={{pt:2}}
                style={{color:"white",width:"71%"} }           
                label="Photo"
                name="photo"
                onChange={(e)=>{setEmployeeDetails(prev=>{ return{...prev,photo:e.target.value}})}}
                type={"file"}
                value={employeeDetails.photo}
               
                />
        {/* <TextField
                width={"45%"}
                style={{color:"white"}}            
                label="First Name"
                name="first_name"
                onChange={()=>{}}
                type="text"
                /> */}
                </div>
<div style={{margin:"2rem"}}>


</div>
<div style={{margin:"2rem",textAlign:"center"}}>


</div>
        </form>
        
        </div>
    )
}