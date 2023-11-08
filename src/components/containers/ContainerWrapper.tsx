import React from "react";

interface ContainerWrapperProps {
  children?: React.ReactNode
  color: keyof typeof colors
  
}

const colors = {
  green: 'bg-green-50',
  blue: 'bg-blue-50',
  rose: 'bg-rose-50',
  none: ''
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = (props) => {
  const { children, color } = props

  return (
    <div className={`flex flex-1 flex-col rounded-xl ${colors[color]} w-full p-4 gap-3 items-center justify-center`}>
      {children}
    </div>
  );
}

export default ContainerWrapper;