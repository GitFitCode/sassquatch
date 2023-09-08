import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import Image from "next/image";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-gfc-gray border-b border-zinc-300 text-black z-[10] dark:bg-gfc-gray dark:text-gray-200 text-gray-900">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
       <Link href={session?.user ? '/dashboard' : '/'} className="flex items-center">
        <Image
          src="https://i.postimg.cc/28x1j2fC/gfc-logo-discord-bacground-image.png"
          className="rounded-lg"
          alt="Unbound"
          style={{ zIndex: "10" }}
          width="196"
          height="155"
        />
        </Link>
        <div className="flex gap-2 justify-center items-center">
          { session?.user ? (
            <>
              <UserAccountNav user={session.user} />
            </>
          ) : (
            <Link href='/sign-in' className={buttonVariants({
              variant: "primary",
            })}>Sign In</Link>
          )}
        </div>
      </div>
    </div>
  )
};

export default Navbar;