import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CustomersTable } from 'src/sections/customer/customers-table';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { applyPagination } from 'src/utils/apply-pagination';
import { useRouter } from 'next/router';
import EditForm from 'src/components/EditDetailForm';

const now = new Date();

const data = [
  {
    id: '5e887ac47eed253091be10cb',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: 'carson.darrin@devias.io',
    first_name: 'Carson',
    last_name: 'Darrin',
    name:'Carson Darrin',
    phone: '304-428-3097',
    email:"aabc@sjdjs.com",
    user_type_id:2,
    user_type:"BUSSINESS",
    status:1,
    email_verified:true,
    email_verified_at:"32323323",
    created_at:"12233"


  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    createdAt: subDays(subHours(now, 7), 1).getTime(),
    email: 'carson.darrin@devias.io',
    first_name: 'Jhon',
    last_name: 'Shaw',
    name:"Jhon Shaw",
    phone: '304-428-3097',
    email:"jhon@sjdjs.com",
    user_type_id:3,
    user_type:"SALES",
    status:1,
    email_verified:false,
    email_verified_at:"32323323",
    created_at:"12233"
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
  
    createdAt: subDays(subHours(now, 4), 2).getTime(),
    email: 'carson.darrin@devias.io',
    first_name: 'Mike',
    last_name: 'Ron',
    name:"Mike Ron",
    phone: '304-428-3097',
    email:"mike@sjdjs.com",
    user_type_id:2,
    user_type:"BUSSINESS",
    status:1,
    email_verified:true,
    email_verified_at:"32323323",
    created_at:"12233"
  },
  {
    id: '5e86809283e28b96d2d38537',
 
    createdAt: subDays(subHours(now, 11), 2).getTime(),
    email: 'anika.visser@devias.io',
    name:"Anika Visser",
    first_name: 'Anika',
    last_name: 'Visser',
    phone: '304-428-3097',
    email:"aabc@sjdjs.com",
    user_type_id:2,
    user_type:"BUSINESS",
    status:1,
    email_verified:false,
    email_verified_at:"32323323",
    created_at:"12233"
  },

];

const useCustomers = (page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer.id);
    },
    [customers]
  );
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);


  let [openForm,setOpenForm]=useState(false)
  let[udetail,setUdetail]=useState({})
  

  let router =useRouter()
  useEffect(()=>{

    if(!window.localStorage.getItem("token")){
      router.push("/")
    }
  })
  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    []
  );

  function openFormDetail(id){


    setUdetail(data.find(e=>{return e.id==id}))
    setOpenForm(prev=>!prev)


  }

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );

  return (
    <>
      <Head>
        <title>
          Sales
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 5
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
              >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Sales
                </Typography>
            

                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                  >
                  {/* <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button> */}
               
                </Stack>
              </Stack>

              <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
              {/* <div>
                <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                  <PlusIcon />
                  </SvgIcon>
                  )}
                  variant="contained"
                  >
                  Add
                  </Button>
                </div> */}
            </Stack>
                <Divider sx={{borderColor:"#1c2536"}} />
            <CustomersSearch />
            <CustomersTable
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
              openFormDetail={openFormDetail}
            />

            {openForm?<EditForm udetail={udetail} setOpenForm={setOpenForm} />:""}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
