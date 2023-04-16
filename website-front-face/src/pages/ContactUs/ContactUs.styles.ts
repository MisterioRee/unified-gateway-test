import styled, { css } from 'styled-components';
import { Input } from 'antd';
import { DARK_GREEN, GREY, WHITE } from 'constants/index';

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
  padding-left: 3%;
  padding-right: 3%;
`;

export const Container = styled.div<{ image: string }>`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('${({ image }) => image}');
  height: 400px;
  display: flex;
  row-gap: 100px;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding-top: 130px;
`;

export const ContactUsForm = styled.form`
  ${horizontalSpacing2}
  padding-top: 40px;
  text-align: center;
  background-color: ${WHITE};
  color: ${GREY};
  border: 1px solid #eeeeee;
  border-radius: 5px;
`;
export const ContactUsHeading = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
`;

export const ContactUsDescription = styled.p`
  font-size: 1.2rem;
  text-align: center;
  ${horizontalSpacing}
`;

export const FormRow = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  ${horizontalSpacing}
  ${verticalSpacing}
`;

export const FormInput = styled(Input)`
  flex-grow: 1;
  height: 45px;
  font-size: 1rem;
  &.ant-input:hover,
  &.ant-input:active,
  &.ant-input:focus {
    border-color: ${DARK_GREEN};
  }
`;

export const TextArea = styled(Input.TextArea)`
  resize: none;
  font-size: 1rem;
  &.ant-input:hover,
  &.ant-input:active,
  &.ant-input:focus {
    border-color: ${DARK_GREEN};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  ${verticalSpacing}
`;

export const SpaceDiv = styled.div`
  margin-top: 30%;
  margin-bottom: 30%;
`;
