'use client';

import { User } from "next-auth";
import { FC } from "react";
import UserAvatar from "./UserAvatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/DropdownMenu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>
}
const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-8 w-8"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-black dark:text-grey-200 bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            { user.name && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onSelect={(event: any) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            });
          }}
          className="cursor-pointer">
          Sign Out
        </DropdownMenuItem>

        <DropdownMenuSeparator />


      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;