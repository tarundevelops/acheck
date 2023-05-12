import { Button, Typography } from "@mui/material";

import * as React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(prop) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    prop.setOpenForm(true);
  };
  const handleClose = () => {
    prop.setOpenForm(false);
  };

  return (
    <div>
  
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Ok
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>

         <EditForm udetail={prop.udetail} setOpenForm={prop.setOpenForm} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

 function EditForm({udetail , setOpenForm}){
    
    return(
     //   <div style={{ position:"absolute",top:"9rem",left:"22rem",width:"70rem",height:"35rem",backgroundColor:"rgb(138 149 255 / 87%)",filter:"drop-shadow(2px 4px 6px black)",borderRadius:"1rem",padding:"5rem"}}>
<div>

<div className="editDiv">


<div>

<Typography variant="p">
{"First Name"}
</Typography>
<Typography variant="h6">
{udetail.first_name}
</Typography>
</div>
<div>

<Typography variant="p">
{"Last Name"}
</Typography>
<Typography variant="h6">
{udetail.last_name}
</Typography>
</div>
<div>

<Typography variant="p">
{"Email"}
</Typography>
<Typography variant="h6">
{udetail.email}
</Typography>
</div>
            </div>

<div className="editDiv">


<div>

<Typography variant="p">
{"User Type Id"}
</Typography>
<Typography variant="h6">
{udetail.user_type_id}
</Typography>
</div>
<div>

<Typography variant="p">
{"User Type"}
</Typography>
<Typography variant="h6">
{udetail.user_type}
</Typography>
</div>
<div>

<Typography variant="p">
{"Status"}
</Typography>
<Typography variant="h6">
{udetail.status==1?"ACTIVE":"INACTIVE"}
</Typography>
</div>
            </div>

<div className="editDiv">


<div>

<Typography variant="p">
{"Email Verified"}
</Typography>
<Typography variant="h6">
{udetail.email_verified?"YES":"NO"}
</Typography>
</div>
<div>

<Typography variant="p">
{"Email Verified At"}
</Typography>
<Typography variant="h6">
{udetail.email_verified_at}
</Typography>
</div>
<div>

<Typography variant="p">
{"Account Created At"}
</Typography>
<Typography variant="h6">
{udetail.created_at}
</Typography>
</div>
            </div>
<div style={{textAlign:"center"}}>


<Button  variant="contained" onClick={()=>{setOpenForm(prev=>!prev)}} sx={{color:"white"}}  >
    {"Close"}
</Button>
</div>

</div>

       
    )
}