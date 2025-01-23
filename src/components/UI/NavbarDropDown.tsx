"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { useRouter } from "next/navigation";
import { logout } from "@/src/services/AuthService";

const NavbarDropDown = () => {
  const router = useRouter();

  const handleRouter = (pathName: string) => {
    router.push(pathName);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name="Doe" className="cursor-pointer" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onPress={() => handleRouter("/profile")} key="profile">
          Profile
        </DropdownItem>

        <DropdownItem
          onPress={() => handleRouter("/profile/create-post")}
          key="create-post"
        >
          Create Post
        </DropdownItem>

        <DropdownItem
          onPress={() => handleRouter("/profile/settings")}
          key="settings"
        >
          Settings
        </DropdownItem>

        <DropdownItem
          onPress={() => handleRouter("/profile/about")}
          key="about"
        >
          About
        </DropdownItem>
        <DropdownItem
          onPress={() => handleRouter("/profile/claim-request")}
          key="claim-request"
        >
          Claim Request
        </DropdownItem>

        <DropdownItem onPress={() => logout()} key="logout">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropDown;
