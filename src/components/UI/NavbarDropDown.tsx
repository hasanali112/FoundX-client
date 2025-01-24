"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { usePathname, useRouter } from "next/navigation";

import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";
import { protectedRoutes } from "@/src/constant";

const NavbarDropDown = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { user, setIsLoading } = useUser();

  const handleRouter = (pathName: string) => {
    router.push(pathName);
  };

  const handleLogout = () => {
    logout();
    setIsLoading(true);

    if (protectedRoutes.some((route) => pathName.match(route))) {
      router.push("/");
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar src={user?.profilePhoto} className="cursor-pointer" />
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

        <DropdownItem onPress={handleLogout} key="logout">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropDown;
