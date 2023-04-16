import { GREEN, GREY, WHITE } from 'constants/index';
import styled, { css } from 'styled-components';

const horizontalSpacing = css`
  padding-left: 10%;
  padding-right: 10%;
`;
const verticalSpacing = css`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const verticalSpacing2 = css`
  margin-top: 140px;
  margin-bottom: 140px;
`;

const horizontalSpacing2 = css`
  padding-left: 5%;
  padding-right: 5%;
`;

export const AboutUsImage = styled.div<{ image: string }>`
  background-repeat: no-repeat;
  background-size: cover;
  color: ${WHITE};
  background-image: url('${({ image }) => image}');
  height: 400px;
  width: 100%;
  padding-top: 140px;
  padding-bottom: 100px;
  font-size: 4rem;
  font-weight: 500;
  ${horizontalSpacing}
`;

export const CompanyValues = styled.div`
  text-align: center;
  align-items: center;
  align-content: center;
  width: 100%;
  padding-left: 25%;
  padding-right: 25%;
`;

export const CompanyValuesHeading = styled.h1`
  font-size: 4rem;
`;

export const CompanyValuesDescription = styled.p`
  font-size: 1.5rem;
  ${horizontalSpacing}
`;

export const CompanyValueKeyPoints = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  ${horizontalSpacing}
`;

export const CompanyValuesImage = styled.img`
  border-radius: 50%;
  width: 650px;
  height: 650px;
`;

export const CompanyValuesList = styled.ol`
  padding-top: 120px;
`;

export const CompanyValuesListItem = styled.li`
  &::marker {
    font-size: 3rem;
    font-weight: 600;
    padding-top: 20px;
  }
`;

export const ValuesHeading = styled.h1`
  font-size: 1.8rem;
`;

export const ValuesDescription = styled.h1`
  font-size: 1rem;
  color: ${GREY};
`;
