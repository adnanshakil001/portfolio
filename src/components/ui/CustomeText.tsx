import React from 'react';

interface CustomeTextProps {
  title: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const CustomeText: React.FC<CustomeTextProps> = ({
  title,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component className={`leading-tight ${className}`}>
      {title}
    </Component>
  );
};

export default CustomeText;

