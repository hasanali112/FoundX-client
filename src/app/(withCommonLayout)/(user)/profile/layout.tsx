import Container from "@/src/components/UI/Container";
import Sidebar from "@/src/components/UI/SideBar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {" "}
      <Container>
        <div className="my-3 flex w-full gap-12">
          <div className="w-2/5">
            <Sidebar />
          </div>
          <div className="w-4/5">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default layout;
