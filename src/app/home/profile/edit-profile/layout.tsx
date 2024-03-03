type Props = {
  children: React.ReactNode;
};

const EditProfileLayout = ({ children }: Props) => {
  return <div className="editprofile-layout h-full w-full">{children}</div>;
};

export default EditProfileLayout;
