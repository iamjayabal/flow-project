import { Fragment, useCallback } from 'react';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import HomeIcon from '@mui/icons-material/Home';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import { useDispatch } from 'react-redux';
import { sideMenuActions } from '@_store/menu_slice';

const menu = [
  // {
  //   id: 0,
  //   name: 'Home',
  //   path: '',
  //   imageUrl: '',
  //   menu: [],
  // },
  {
    id: 1,
    name: 'Dashboard',
    path: '',
    imageUrl: '',
    menu: [],
  },
  {
    id: 2,
    name: 'Audit',
    path: '',
    imageUrl: '',
    menu: [],
  },
];

const MainListItems = () => {
  const dispatch = useDispatch();

  const handleMenuClick = (menu: string) => {
    dispatch(sideMenuActions.sideMenuClick(menu));
    console.log('menu ', menu);
  };

  const renderIcon = (name: string) => {
    switch (name) {
      // case 'Home':
      //   return <HomeIcon />;
      case 'Dashboard':
        return <DashboardIcon />;
      case 'Audit':
        return <LaptopChromebookIcon />;
      // case 'Customers':
      //   return <PeopleIcon />;
      // case 'Reports':
      //   return <BarChartIcon />;
      // case 'Integrations':
      //   return <LayersIcon />;
    }
  };

  return (
    <Fragment>
      {menu.map((res: any) => (
        <ListItemButton key={res.id} onClick={() => handleMenuClick(res)}>
          <ListItemIcon>{renderIcon(res.name)}</ListItemIcon>
          <ListItemText primary={res.name} />
        </ListItemButton>
      ))}
    </Fragment>
  );
};

export default MainListItems;
