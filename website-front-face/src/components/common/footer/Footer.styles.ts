import { GREEN, GREY, WHITE } from 'constants/index';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const horizontalSpacing = css`
  padding-left: 10%;
  padding-right: 10%;
`;
const verticalSpacing = css`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const verticalPadding = css`
  padding-top: 50px;
  padding-bottom: 50px;
`;

const verticalSpacing2 = css`
  margin-top: 140px;
  margin-bottom: 140px;
`;

const horizontalSpacing2 = css`
  padding-left: 5%;
  padding-right: 5%;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #333333;
  height: 200px;
  ${verticalPadding}
  ${horizontalSpacing}
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

export const NavLinksContainer = styled.div`
  flex-direction: row;
  justify-content: space-around;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  padding-left: 20px;
  padding-right: 20px;
  color: ${WHITE};
  &:hover {
    color: ${GREEN};
  }
`;

export const CopyRight = styled.div`
  color: ${GREY};
  padding-left: 20px;
  padding-right: 20px;
`;
