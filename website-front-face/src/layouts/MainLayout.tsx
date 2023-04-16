import React from "react";
import Header from "components/common/header/Header";
import Main from "components/common/main/Main";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default MainLayout;
