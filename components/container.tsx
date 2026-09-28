import React from "react";

interface ContainerPageProps {
  children: React.ReactNode;
}

const ContainerPage = (props: ContainerPageProps) => {
  const { children } = props;
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-40 pt-32 sm:px-6 md:pb-44 md:pt-40">
      {children}
    </div>
  );
};

export default ContainerPage;
