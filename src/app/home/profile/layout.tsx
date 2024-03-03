type Props = {
  children: React.ReactNode;
};

// think about the layout structure to add parallel routes
// don't forget about fetching data, using joints, where and when the fetch happens

const ProfileLayout = ({ children }: Props) => {
  return <div className="profile-layout h-full w-full">{children}</div>;
};

export default ProfileLayout;
