import React, { useState } from 'react';
import logo from 'assets/logos/logo.svg';
import {
  HeaderArea,
  NavBar,
  NavBarLogo,
  NavBarControls,
  NavigationLinks,
  CheckLink,
  HamBurgerMenu,
} from './Header.styles';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { DASHBOARD } from 'constants/index';
import Button from '../Button/Button';
import { HamBurgerIcon } from 'assets/icons';

type NavigationLinkType = {
  id: string;
  path: string;
  title: string;
  width?: string;
  height?: string;
};

const navigationLinks: NavigationLinkType[] = [
  {
    id: '1',
    path: '/home',
    title: 'Home',
    height: '40',
    width: '15',
  },
  {
    id: '2',
    path: '/service_request',
    title: 'Service Request Form',
    height: '40',
    width: '35',
  },
  {
    id: '3',
    path: '/about',
    title: 'About Us',
    height: '40',
    width: '15',
  },
  {
    id: '4',
    path: '/contact',
    title: 'Contact Us',
    height: '40',
    width: '15',
  },
];

const Header: React.FC = () => {
  // States
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <HeaderArea>
        <NavBar>
          <Link to={'/'}>
            <NavBarLogo src={logo} alt="Emumba Logo" />
          </Link>

          <NavBarControls>
            <NavigationLinks>
              {navigationLinks.map((item) => (
                <Button
                  key={item.id}
                  width={item.width}
                  height={item.height}
                  size="large"
                  type="link"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <CheckLink active={item.path === pathname}>
                    {item.title}
                  </CheckLink>
                </Button>
              ))}
            </NavigationLinks>
            <Button size="large" width="100" type="primary" height="45">
              {DASHBOARD}
            </Button>
          </NavBarControls>

          <HamBurgerIcon
            active={openMenu}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </NavBar>
      </HeaderArea>
      <div className="under-header"></div>
      {openMenu && (
        <HamBurgerMenu>
          <NavigationLinks>
            {navigationLinks.map((item) => (
              <Button
                key={item.id}
                width={'200'}
                height={item.height}
                size="large"
                type="link"
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <CheckLink active={item.path === pathname}>
                  {item.title}
                </CheckLink>
              </Button>
            ))}
          </NavigationLinks>
          <Button size="large" width="100" type="primary" height="45">
            {DASHBOARD}
          </Button>
        </HamBurgerMenu>
      )}
    </>
  );
};
export default Header;
