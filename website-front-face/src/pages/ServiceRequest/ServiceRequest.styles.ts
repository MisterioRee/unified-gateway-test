import { Tabs } from 'antd';
import { DARK_GREEN, GREEN, WHITE } from 'constants/index';
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

export const ServiceRequestImage = styled.div<{ image: string }>`
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

export const ServiceRequestForm = styled.form`
  ${horizontalSpacing}
`;

export const ServiceFormTabs = styled(Tabs)`
  .ant-tabs-ink-bar {
    background-color: ${GREEN};
  }
  .ant-tabs-nav::before {
    border-bottom: none;
  }
  .ant-tabs-nav-list {
    border-bottom: 1px solid #f0f0f0;
  }
  .ant-tabs-tab {
    color: ${GREEN};
    &:hover,
    .ant-tabs-tab-btn:active {
      color: ${DARK_GREEN};
    }
    &.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: ${DARK_GREEN};
    }
  }
  ${verticalSpacing}
`;
const { TabPane } = ServiceFormTabs;
export const ServiceFormTabPane = styled(TabPane)``;
