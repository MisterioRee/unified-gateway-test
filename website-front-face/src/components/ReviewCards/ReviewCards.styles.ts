import { GREY } from './../../constants/index';
import { Card } from 'antd';
import Button from 'components/common/Button/Button';
import styled from 'styled-components';

export const ReviewCardContainer = styled(Card)`
  gap: 20px;
  max-width: 28%;
  border-radius: 7px;
  & .ant-card-body {
    display: flex;
    row-gap: 15px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ReviewerImage = styled.img`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin-bottom: 35px;
`;

export const ReviewDescription = styled.p`
  font-size: 1.15rem;
  color: ${GREY};
`;

export const RatingStars = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 8px;
  width: 40%;
`;

export const ReviewerName = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
`;

export const ReviewerLink = styled.div`
  display: flex;
  justify-content: center;
`;
