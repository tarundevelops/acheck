import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, ButtonBase, Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Badge, BusinessCenter, DatasetRounded, ExpandLess, ExpandMore } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

export const SideNavItem = (props) => {
  const { active = false, disabled, external, icon, path, title } = props;
  
    let pname= usePathname()

    console.log(pname=="/employees")

  let [open,setOpen] = useState(false)
  const linkProps = path
    ? external
      ? {
        component: 'a',
        href: path,
        target: '_blank'
      }
      : {
        component: NextLink,
        href: path
      }
    : {};

    function handleClick(){
      setOpen(prev => !prev)
      }


    if(title == "Customers"){

      let lprop = "/business"
      ? external
        ? {
          component: 'a',
          href: "/business",
          target: '_blank'
        }
        : {
          component: NextLink,
          href: "/business"
        }
      : {};
      let slprop = "/sales"
      ? external
        ? {
          component: 'a',
          href: "/sales",
          target: '_blank'
        }
        : {
          component: NextLink,
          href: "/sales"
        }
      : {};
      let elprop = "/employees"
      ? external
        ? {
          component: 'a',
          href: "/employees",
          target: '_blank'
        }
        : {
          component: NextLink,
          href: "/employees"
        }
      : {};
      return(
        <><ListItemButton sx={{display:"flex",flexDirection:"column",}} onClick={handleClick}>
           <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
       
        <div style={{width:"12rem",display:"flex"}}>
        <Box
          component="span"
          sx={{
            alignItems: 'center',
            color: 'neutral.400',
            display: 'inline-flex',
            justifyContent: 'center',
            mr: 2,
            ...((pname=="/sales" || pname == "/business" || pname=="/employees")  && {
              color: 'primary.main'
            })
          }}
          >
            {<DatasetRounded/>}
          </Box>
        <Box
          component="span"
          sx={{
            color: 'neutral.400',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...((pname=="/sales" || pname == "/business" || pname == "/employees")  && {
              color: 'common.white'
            }),
            ...((pname!="/sales" && pname != "/business" && pname != "/employees")  && {
              color: 'neutral.400'
            })
          }}
        >
          {"Profile"}
        </Box>
          {/* <ListItemText primary="Profile" sx={{}}  /> */}
        </div>
        <div>
        {open? <ExpandLess />:<ExpandMore/> }
          </div>  
          </div> 

        <Collapse sx={{pl:10}}  in={open} timeout="auto" unmountOnExit >
        <div >

        
      <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',

          textAlign: 'left',
          width: '100%',
          ...(pname=="/sales" && {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }),
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }
        }}
        {...slprop}
        >
        {icon && (
          <Box
          component="span"
          sx={{
            alignItems: 'center',
            color: 'neutral.400',
            display: 'inline-flex',
            justifyContent: 'center',
            mr: 2,
            ...(pname=="/sales" && {
              color: 'primary.main'
            })
          }}
          >
            {icon}
          </Box>
        )}
        {/* //////////////// */}
       
        <Box
          component="span"
          sx={{
            color: 'neutral.400',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(pname=="/sales" && {
              color: 'common.white'
            }),
            ...(pname!="/sales" && {
              color: 'neutral.400'
            })
          }}
        >
          {"Sales"}
        </Box>
        
      </ButtonBase>
    
        
            </div>
        <div>

        
      <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',
          mt:1,

          textAlign: 'left',
          width: '100%',
          ...(pname=="/business" && {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }),
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }
        }}
        {...lprop}
        >
        {icon && (
          <Box
          component="span"
          sx={{
            alignItems: 'center',
            color: 'neutral.400',
            display: 'inline-flex',
            justifyContent: 'center',
            mr: 2,
            ...((pname=="/business") && {
              color: 'primary.main'
            })
          }}
          >
            {<BusinessCenter/>}
          </Box>
        )}
        {/* //////////////// */}
       
        <Box
          component="span"
          sx={{
            color: 'neutral.400',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...((pname=="/business") && {
              color: 'common.white'
            }),
            ...((pname!="/business") && {
              color: 'neutral.500'
            })
          }}
        >
          {"Business"}
        </Box>
        
      </ButtonBase>
    
        
            </div>
        <div>

        
        <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',
          mt:1,

          textAlign: 'left',
          width: '100%',
          ...((pname=="/employees") && {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }),
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }
        }}
        {...elprop}
        >
        {icon && (
          <Box
          component="span"
          sx={{
            alignItems: 'center',
            color: 'neutral.400',
            display: 'inline-flex',
            justifyContent: 'center',
            mr: 2,
            ...((pname=="/employees") && {
              color: 'primary.main'
            })
          }}
          >
            {<BusinessCenter/>}
          </Box>
        )}
        {/* //////////////// */}
       
        <Box
          component="span"
          sx={{
            color: 'neutral.400',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 600,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...((pname=="/employees") && {
              color: 'common.white'
            }),
            ...((pname!="/employees") && {
              color: 'neutral.500'
            })
          }}
        >
          {"Employees"}
        </Box>
        
      </ButtonBase>
    
    
        
            </div>
      </Collapse>
        
         </ListItemButton></>
      )
    }

  return (
    <li>
      <ButtonBase
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          pl: '16px',
          pr: '16px',
          py: '6px',
          textAlign: 'left',
          width: '100%',
          ...(active && {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }),
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.04)'
          }
        }}
        {...linkProps}
      >
        {icon && (
          <Box
            component="span"
            sx={{
              alignItems: 'center',
              color: 'neutral.400',
              display: 'inline-flex',
              justifyContent: 'center',
              mr: 2,
              ...(active && {
                color: 'primary.main'
              })
            }}
          >
            {icon}
          </Box>
        )}
        {/* //////////////// */}
       
        <Box
          component="span"
          sx={{
            color: 'neutral.400',
            flexGrow: 1,
            fontFamily: (theme) => theme.typography.fontFamily,
            fontSize: 14,
            fontWeight: 700,
            lineHeight: '24px',
            whiteSpace: 'nowrap',
            ...(active && {
              color: 'common.white'
            }),
            ...(disabled && {
              color: 'neutral.500'
            })
          }}
        >
          {title}
        </Box>
        
      </ButtonBase>
    </li>
  );
};


SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired
};
