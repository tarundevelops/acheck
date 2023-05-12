import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthConsumer, AuthProvider } from 'src/contexts/auth-context';
import { useNProgress } from 'src/hooks/use-nprogress';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import 'simplebar-react/dist/simplebar.min.css';
import {createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "../theme/style.css"

const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;



const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

      let [userlogin,setUserLogin] = useState(false)
      let userLoginContext = createContext({})
let router =useRouter()
// useEffect(()=>{

//   if(! window.localStorage.getItem("token")){
//     if(router.pathname!="/"){
      
//       router.push("/")
//     }
//   }
// })

  return (
    <CacheProvider value={emotionCache}>
      <userLoginContext.Provider value={{userlogin,setUserLogin}}>

      <Head>
        <title>
          Connect App
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
          />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        
          <ThemeProvider theme={theme}>
            <CssBaseline />
          
              {
                 getLayout(<Component {...pageProps} />)
              }
            
          </ThemeProvider>
        
      </LocalizationProvider>
              </userLoginContext.Provider>
    </CacheProvider>
  );
};

export default App;
