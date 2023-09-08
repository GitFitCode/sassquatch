'use client';
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { FC, useState } from "react";
import { signIn } from "next-auth/react";
import { Icons } from "./ui/Icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement>{ }

const UserAuthForm: FC<UserAuthFormProps> = ({
  className,
  ...props
}) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // throw new Error('test');
      await signIn('google');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button 
        size="sm" 
        className="w-full"
        isLoading={isLoading}
        onClick={loginWithGoogle}>
          {isLoading ? null : <Icons.google className="w-4 h-4 mr-2" />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;