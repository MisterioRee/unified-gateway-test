import styled from 'styled-components';
import { Button, Input } from 'antd';
import { GREEN, WHITE } from 'constants/index';

type CheckLinkProps = {
  active?: boolean;
};

export const HeaderArea = styled.header`
  width: 100%;
  z-index: 10;
  min-height: 9vh;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 2.5vh 5vw 2vh 5vw;
  background-color: ${WHITE};
  @media screen and (max-width: 800px) {
    & {
      justify-content: space-between;
    }
  }
`;

export const CheckLink = styled.span<CheckLinkProps>`
  font-weight: ${({ active }) => (active ? '700' : '400')};
`;

export const HamBurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  transition: all 4s ease-in-out;
  & > div {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    width: 100%;
  }
  @media screen and (min-width: 800px) {
    & {
      display: none;
    }
  }
`;

export const NavBarLogo = styled.img``;

export const NavBarControls = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: 4fr 1.5fr;
  @media screen and (max-width: 800px) {
    & {
      display: none;
    }
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  justify-content: space-around;
`;
