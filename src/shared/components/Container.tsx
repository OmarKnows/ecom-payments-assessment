import { FC, ReactNode } from "react";

interface IContainerProps {
  children?: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      {children}
    </div>
  );
};

export default Container;
