import Link from "next/link";
import { Icons } from "./ui/Icons";
import UserAuthForm from "./UserAuthForm";

const SignUp = () => {
  return (
    <div className="container mx-auth flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo className="w-16 h-16 sm:h-12 sm:w-12 mx-auto"/>
        <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
        <UserAuthForm />
        <p className="px-8 text-center text-sm text-zinc-800">
          Already have an account? {' '}
          <Link 
            href='/sign-in'
            className="hover:text-zinc-800 text-sm underline underline-offset-4">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;