import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewBudget } from 'src/sections/overview/overview-budget';
import { OverviewLatestOrders } from 'src/sections/overview/overview-latest-orders';
import { OverviewLatestProducts } from 'src/sections/overview/overview-latest-products';
import { OverviewSales } from 'src/sections/overview/overview-sales';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalCustomers } from 'src/sections/overview/overview-total-customers';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';
import { OverviewBusiness } from 'src/sections/overview/overview-business';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const now = new Date();

const Page = () =>{
  
  let router =useRouter()
  useEffect(()=>{

    if(!window.localStorage.getItem("token")){
      router.push("/")
    }
  })
    return(
  <>
    <Head>
      <title>
        Connect App - Admin Panel
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$24k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalCustomers
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="1.6k"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={455}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalProfit
              sx={{ height: '100%' }}
              value="1022"
            />
          </Grid>
          <Grid
            xs={12}
            lg={12}
          >
            <OverviewSales
              chartSeries={[
                {
                  name: 'Sales',
                  data: [1, 6, 5, 8, 3, 4, 4, 5,1, 9, 8, 2]
                },
                {
                  name: 'Business',
                  data: [2, 10, 4, 6, 2, 9, 9, 7, 11, 12, 13, 10]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            lg={12}
          >
            {/* <OverviewBusiness
              chartSeries={[
                {
                  name: 'This year',
                  data: [20, 10, 5, 18, 30, 14, 14, 6, 7, 18 ,18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 21, 9, 6, 22, 9, 9, 10, 11, 12, 16, 13]
                }
              ]}
              sx={{ height: '100%' }}
            /> */}
          </Grid>
      
        </Grid>
      </Container>
    </Box>
  </>
);}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
