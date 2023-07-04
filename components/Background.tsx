type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

const Background = ({ children, className, id, style }: Props) => {
  return (
    <div id={id} className={`w-full ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Background;
