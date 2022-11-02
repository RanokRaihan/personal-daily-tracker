import React from "react";

const Label = ({ children, ...rest }) => {
  return (
    <label className='block font-semibold text-xl' {...rest}>
      {children}
    </label>
  );
};

export default Label;
