// handle default props
const defaultContainerprops = {
  userName: <p>user 1</p>,
};

const Container = ({
  userName,
  children,
}: { children: React.ReactNode } & typeof defaultContainerprops) => {
  return (
    <div>
      <p>{userName}</p>
      {children}
    </div>
  );
};

Container.defaultProps = defaultContainerprops;

export default Container;
