"use client";

import { logout } from "@/app/actions";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PiSignOutFill } from "react-icons/pi";
import NavList from "./sidebar/NavList";
import { useState } from "react";

const SideBar = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    const msg = await logout();
    if (msg) {
      toast.error(msg);
      setLoading(false);
    } else router.refresh();
  };

  return (
    <aside className="h-full flex flex-col items-center justify-between p-4 gap-5 border-r border-r-stone-300">
      <div className="upper w-full flex flex-col items-center justify-between gap-5">
        <div className="logo">
          <Image
            src="/mona-lisa.png"
            alt="the_logo"
            height={50}
            width={50}
            quality={100}
          />
        </div>
        <NavList />
      </div>

      <Dropdown placement="bottom-end" isDisabled={true}>
        <DropdownTrigger className={loading ? "pointer-events-none" : ""}>
          <Avatar
            isBordered
            radius="md"
            src="/default-user-img.jpg"
            className="transition-transform cursor-pointer"
          />
        </DropdownTrigger>
        {/* remember to add the empty content as a placeholder */}
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownSection aria-label="sections" showDivider>
            <DropdownItem
              key="profile"
              href="home/profile"
              className="h-14 gap-2"
              closeOnSelect
              textValue="profile"
            >
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">@tonyreichert</p>
            </DropdownItem>
            <DropdownItem
              key="edit-profile"
              href="home/profile/edit-profile"
              closeOnSelect
              textValue="edit-profile"
            >
              Edit Profile
            </DropdownItem>
            <DropdownItem key="analytics" textValue="analytics">
              Analytics
            </DropdownItem>
            <DropdownItem key="personalization" textValue="personalization">
              Personalization
            </DropdownItem>
          </DropdownSection>
          <DropdownSection aria-label="logout">
            <DropdownItem
              key="logout"
              color="danger"
              startContent={<PiSignOutFill size="1.5em" />}
              className="flex items-center justify-start gap-2"
              onClick={handleLogout}
              textValue="logout"
            >
              Log Out
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </aside>
  );
};

export default SideBar;
