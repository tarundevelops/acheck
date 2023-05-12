import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { AccountBalance, CircleNotifications, Help, HelpCenter, LocalOffer, PostAdd, RecordVoiceOver, Speaker } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Bids',
  //   path: '/bids',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <RecordVoiceOver/>
  //     </SvgIcon>
  //   )
  // },
  {
    title: 'Ads',
    path: '/ads',
    icon: (
      <SvgIcon fontSize="small">
        <PostAdd/>
      </SvgIcon>
    )
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: (
      <SvgIcon fontSize="small">
        <CircleNotifications/>
      </SvgIcon>
    )
  },
  {
    title: 'Payments',
    path: '/payments',
    icon: (
      <SvgIcon fontSize="small">
        <AccountBalance/>
      </SvgIcon>
    )
  },
  {
    title: 'Offers',
    path: '/offers',
    icon: (
      <SvgIcon fontSize="small">
        <LocalOffer/>
      </SvgIcon>
    )
  },
  {
    title: 'Help',
    path: '/help',
    icon: (
      <SvgIcon fontSize="small">
        <Help/>
      </SvgIcon>
    )
  },
  {
    title: 'Account',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },


];
