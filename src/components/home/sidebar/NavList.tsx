"use client";

import { Button, Link, Tooltip } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaImage, FaUser } from "react-icons/fa6";

const LINKS = [
  {
    name: "home",
    icon: FaHome,
  },
  {
    name: "search",
    icon: FaSearch,
  },
  {
    name: "profile",
    icon: FaUser,
  },
];

const NavList = () => {
  return (
    <ul className="w-full flex flex-col items-center justify-center gap-4">
      {LINKS.map((link) => {
        return (
          <li key={link.name}>
            <Tooltip
              placement="right"
              color="default"
              content={link.name}
              delay={250}
              closeDelay={0}
              className="capitalize"
              radius="sm"
            >
              <Button
                href={`/${
                  link.name === "home" ? link.name : `home/${link.name}`
                }`}
                as={Link}
                variant="solid"
                color="secondary"
                isIconOnly
                radius="sm"
              >
                <link.icon size={"1.5em"} />
              </Button>
            </Tooltip>
          </li>
        );
      })}
      <li>
        <Tooltip
          placement="right"
          color="default"
          content="Post"
          delay={250}
          closeDelay={0}
          radius="sm"
        >
          <Button
            href=""
            as={Link}
            variant="shadow"
            color="secondary"
            isIconOnly
            size="lg"
            radius="full"
            className="mt-3"
          >
            <FaImage size={"1.5em"} />
          </Button>
        </Tooltip>
      </li>
    </ul>
  );
};

export default NavList;
