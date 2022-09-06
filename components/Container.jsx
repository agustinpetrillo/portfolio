const Container = ({ children, className }) => {
  return (
    <div
      className={`container my-auto mx-auto max-w-4xl 2xl:max-w-7xl w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
