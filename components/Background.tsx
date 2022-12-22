type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
  id?: string;
};

const Background = ({ children, className, id }: Props) => {
  return (
    <div id={id} className={`w-full ${className}`}>
      {children}
    </div>
  );
};

export default Background;
