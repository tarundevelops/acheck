import { useCallback } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

export const EmployeePermission = ({employeeDetails,setEmployeeDetails}) => {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

console.log(employeeDetails.permissions);
  function handleCheck(e){

    if(e.target.checked){
      setEmployeeDetails(prev=>{
        return ({...prev,
            permissions:[...prev.permissions,{name:e.target.value}]
   
         })
         })
    
    }else{
console.log(e.target.value);
     setEmployeeDetails(prev=>{
     return ({...prev,
         permissions: prev.permissions.filter(ob=>{
         return ob.name != e.target.value
        })

      })
      })
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        {/* <CardHeader
          subheader="Manage the notifications"
          title="Notifications"
        /> */}
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              xs={12}
              sm={6}
              md={4}
            >
              <Stack spacing={1}>
                <Typography variant="h6">
                  Employee Permissions
                </Typography>
                <Stack>
                  <FormControlLabel
                    control={<Checkbox value={"SALES"}  onChange={handleCheck}/>}
                    label="Sales"
                  />
                  <FormControlLabel
                    control={<Checkbox value={"BUSINESS"} onChange={handleCheck}  />}
                    label="Business"
                  />
                  <FormControlLabel
                    control={<Checkbox value={"EMPLOYEES"} onChange={handleCheck}/>}
                    label="Employees"
                  />
                  <FormControlLabel
                    control={<Checkbox value={"ADS"} onChange={handleCheck} />}
                    label="Ads"
                  />
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              sx={{mt:2}}
            >
              <Stack spacing={1}>
                <Typography variant="h6">
                  
                </Typography>
                <Stack>
                  <FormControlLabel
                    control={<Checkbox value={"NOTIFICATIONS"} onChange={handleCheck} />}
                    label="Notifications"
                  />
                  <FormControlLabel
                    control={<Checkbox value={"PAYMENTS"} onChange={handleCheck}/>}
                    label="Payments"
                  />
                  <FormControlLabel
                    control={<Checkbox value={"OFFERS"} onChange={handleCheck} />}
                    label="Offers"
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
        {/* <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">
            Save
          </Button>
        </CardActions> */}
      </Card>
    </form>
  );
};
