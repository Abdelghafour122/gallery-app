import SideBar from "@/components/home/SideBar";

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="home-layout flex items-start justify-start h-full w-full gap-5">
      <SideBar />
      {children}
    </div>
  );
};

export default HomepageLayout;
