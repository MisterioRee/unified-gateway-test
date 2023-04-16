import { WHITE } from 'constants/index';
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

export const ProjectsImages = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 700px;
  ${verticalSpacing2}
`;

export const ProjectInfo = styled.div<{ image: string }>`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('${({ image }) => image}');
  width: 476px;
  padding-top: calc(700px - 120px);
`;

export const ProjectHeading = styled.h1`
  color: ${WHITE};
  font-size: 1.5rem;
  line-height: 1.2rem;
`;

export const ProjectDescription = styled.p`
  color: ${WHITE};
  font-size: 1rem;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  row-gap: 20px;
  text-align: center;
  width: 100%;
  ${verticalSpacing2}
`;

export const ContactHeading = styled.h1`
  font-size: 3.7rem;
`;

export const ContactDescription = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
`;
