import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from '@nextui-org/react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Notification() {
  const iconClasses =
    'text-xl text-default-500 pointer-events-none flex-shrink-0';

  return (
    <Dropdown>
      <DropdownTrigger>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={4} color='primary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </DropdownTrigger>
      <DropdownMenu variant='faded' aria-label='Dropdown menu with description'>
        <DropdownItem
          key='new'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, unde.'
        >
          Notification One
        </DropdownItem>
        <DropdownItem
          key='copy'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, unde.'
        >
          Notification Two
        </DropdownItem>
        <DropdownItem
          key='edit'
          showDivider
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, unde.'
        >
          Notification Three
        </DropdownItem>
        <DropdownItem
          key='delete'
          className='text-danger'
          color='danger'
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, unde.'
        >
          Notification Three
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
