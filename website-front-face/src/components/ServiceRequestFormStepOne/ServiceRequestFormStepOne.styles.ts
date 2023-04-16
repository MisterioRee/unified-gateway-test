import { Input } from 'antd';
import { DARK_GREEN } from 'constants/index';
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

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${horizontalSpacing}
  ${verticalSpacing}
`;

export const FormInput = styled(Input)`
  height: 45px;
  font-size: 1rem;
  width: 380px;
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
