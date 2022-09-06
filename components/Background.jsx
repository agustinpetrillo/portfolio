const Background = ({ children, className, id }) => {
  return (
    <div id={id} className={`w-full ${className}`}>
      {children}
    </div>
  );
};

export default Background;
