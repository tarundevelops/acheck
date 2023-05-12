import Head from 'next/head';
import { Box, Button, CardContent, Container, Divider, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { SettingsPassword } from 'src/sections/settings/settings-password';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AddEmployeeForm from 'src/components/AddEmployeeForm';
import { EmployeePermission } from 'src/components/EmployeePermission';
import axios from 'axios';

const Page = () =>{  

    let [employeeDetails,setEmployeeDetails]=useState({user_type_id:4,first_name:"",last_name:"",email:"",password:"",confirm_password:"",permissions:[],address:"",photo:""})
  let router =useRouter()

  async function  handleSubmit(){

    if(employeeDetails.password === employeeDetails.confirm_password){
      let res = await axios.post(`${process.env.API_URL}/users`,{user_type_id:employeeDetails.user_type_id,first_name:employeeDetails.first_name,last_name:employeeDetails.last_name,email:employeeDetails.email,password:employeeDetails.password,permissions:employeeDetails.permissions,address:employeeDetails.address,photo:employeeDetails.photo})

    }else{
        console.log("Password not matched")
    }
  }

  useEffect(()=>{

    if(!window.localStorage.getItem("token")){
      router.push("/")
    }
  })
  return(
  <>
    <Head>
      <title>
        Add Employee
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 5
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Typography variant="h4">
            Add Employee
          </Typography>

          <Divider sx={{borderColor:"#1c2536"}} />
          <CardContent>

          <AddEmployeeForm employeeDetails={employeeDetails} setEmployeeDetails={setEmployeeDetails}/>
          </CardContent>
          <EmployeePermission employeeDetails={employeeDetails} setEmployeeDetails={setEmployeeDetails}/>
          <Button onClick={()=>{handleSubmit}} sx={{width:"7rem",alignSelf:"center"}} type={"submit"}  variant="contained">
            Submit
          </Button>

        </Stack>
      </Container>
    </Box>
  </>
);

}
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
