type TChildProps = {
  children: React.ReactNode;
  recentPost: React.ReactNode;
};

const layout = ({ children, recentPost }: TChildProps) => {
  return (
    <>
      {children}
      {recentPost}
    </>
  );
};

export default layout;
