import { GREY } from './../../constants/index';
import { Card } from 'antd';
import styled from 'styled-components';

export const ServiceCardContainer = styled(Card)`
  border-radius: 7px;
  & .ant-card-body {
    display: grid;
    gap: 20px;
    @media screen and (max-width: 800px) {
      & {
        text-align: center;
      }
    }
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;
export const CardTitle = styled.h2`
  display: inline-block;
  font-size: clamp(0.8rem, 3vw, 1.2rem);

  font-size: 1.2rem;
  height: 30px;
`;
export const CardIcon = styled.div``;

export const CardDescription = styled.p`
  padding-left: 15px;
  padding-right: 15px;
  font-size: clamp(0.9rem, 3vw, 1rem);
  color: ${GREY};
  height: 50px;
`;

export const CardFooter = styled.div`
  height: 10px;
  width: 100%;
  & button {
    width: 100% !important;
    text-align: center;
  }
`;
