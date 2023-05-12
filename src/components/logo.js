import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import logo from "../utils/logolarge.png"

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <>
    <Image src={logo} style={{width:"15rem",height:"5rem"}} />

    </>
  );
}