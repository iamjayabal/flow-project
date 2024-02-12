import { useDispatch } from 'react-redux';

import ChangeLanguage from '@_translation/ChangeLanguage';
import { authActions } from '@_store/auth';
import TabSelection from '@_shared/tab/TabSelection';
import HeaderIcons from './HeaderIcons';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

import './header.style.scss';

export default function Header() {
  const dispatch = useDispatch();

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      {/* <Navbar>
        <div className='w-10/12'>
          <TabSelection />
        </div>

        <HeaderIcons />
      </Navbar> */}
      <Navbar isBordered isBlurred={false}>
        <NavbarBrand>
          <svg fill='none' height='36' viewBox='0 0 32 32' width='36'>
            <path
              clipRule='evenodd'
              d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
              fill='currentColor'
              fillRule='evenodd'
            />
          </svg>
          <p className='font-bold text-inherit'>Logo</p>
        </NavbarBrand>
        {/* <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href='#' aria-current='page'>
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <HeaderIcons />
            {/* <ChangeLanguage /> */}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
