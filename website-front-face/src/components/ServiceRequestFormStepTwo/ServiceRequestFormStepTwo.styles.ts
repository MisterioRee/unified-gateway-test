import { Input, Select } from 'antd';
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
  width: 380px;
  font-size: 1rem;
  &.ant-input:hover,
  &.ant-input:active,
  &.ant-input:focus {
    border-color: ${DARK_GREEN};
  }
`;

export const FormSelect = styled(Select)`
  &.ant-select .ant-select-selector {
    height: 45px;
    width: 380px;
  }
  .ant-select-selection-placeholder {
    margin-top: 7px;
    font-size: 1rem;
  }
  .ant-select-selection-item {
    margin-top: 7px;
    font-size: 1rem;
  }
  &.ant-select:hover,
  &.ant-select:active,
  &.ant-select:focus {
    border-color: ${DARK_GREEN};
    outline-color: ${DARK_GREEN};
  }
`;

export const TextArea = styled(Input.TextArea)`
  font-size: 1rem;
  resize: none;
  &.ant-input:hover,
  &.ant-input:active,
  &.ant-input:focus {
    border-color: ${DARK_GREEN};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${verticalSpacing}
`;
