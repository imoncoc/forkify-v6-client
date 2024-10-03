"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { SearchIcon, Logo } from "@/src/components/icons";
import logo from "../../assets/logo.png";
import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";

export const Navbar = () => {
  const { user, setIsLoading: userLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    userLoading(true);
    router.push("/");
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar className="py-4" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Logo /> */}
            <Image
              alt="NextUI hero Image"
              className="size-8"
              src={logo}
              width={300}
            />
            <p className="font-bold text-inherit">Forkify</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={item.href === pathname}>
              <NextLink
                className={clsx(linkStyles({ color: "foreground" }))}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        {!user && (
          <>
            <NavbarItem className="hidden sm:flex gap-2">
              <Link href="/login">
                <Button
                  color="danger"
                  variant="shadow"
                  // className="bg-slate-50 dark:bg-slate-200 text-customColorPrimary font-semibold"
                >
                  Login
                </Button>
              </Link>
            </NavbarItem>
          </>
        )}
        {user?.role === "user" && (
          <>
            <Dropdown placement="bottom-end" backdrop="blur">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="warning"
                  name="Jason Hughes"
                  size="sm"
                  src={user.profilePhoto}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>

                <DropdownItem key="user-profile" href="/profile">
                  Profile
                </DropdownItem>
                <DropdownItem key="user-recipe" href="/my-recipe">
                  My Recipe
                </DropdownItem>
                <DropdownItem key="user-followers" href="#">
                  My Follower&apos;s
                </DropdownItem>
                <DropdownItem key="user-followings" href="#">
                  Followings
                </DropdownItem>
                <DropdownItem key="user-membership" href="#">
                  Get Membership
                </DropdownItem>
                <DropdownItem key="user-edit-profile" href="/edit-profile">
                  Edit Profile
                </DropdownItem>

                <DropdownItem
                  onClick={handleLogout}
                  key="logout"
                  color="danger"
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        )}
        {user?.role === "admin" && (
          <>
            <Dropdown placement="bottom-end" backdrop="blur">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="warning"
                  name="Jason Hughes"
                  size="sm"
                  src={user.profilePhoto}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user?.email}</p>
                </DropdownItem>

                {/* For Admin */}

                <DropdownItem key="admin-profile" href="/admin">
                  Profile
                </DropdownItem>

                <DropdownItem
                  onClick={handleLogout}
                  key="logout"
                  color="danger"
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-gradient-to-r from-customColor1/50 to-customColor2/50 dark:bg-gradient-to-r dark:from-default-50 dark:to-default-100">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
