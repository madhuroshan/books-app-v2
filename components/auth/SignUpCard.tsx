import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

interface SignUpCardProps {
  setState: (state: AuthScreenState) => void;
}

const SignUpCard = ({ setState }: SignUpCardProps) => {
  return (
    <div className="absolute w-[400px] bg-white p-6 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] border border-gray-800 rounded-lg shadow-lg text-primary">
      <div className="flex flex-col items-center justify-center max-sm:w-full max-sm:mx-4 mb-6">
        <h1 className="font-bold text-3xl text-gray-800">
          Sign up for Biblio Stack
        </h1>
        <p className="text-[16px] text-gray-600">Sign up to continue using</p>
      </div>

      <form action="" className="flex gap-4 flex-col">
        <Input placeholder="Email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
        <Input placeholder="Full Name" />
        <Input placeholder="Username" />
        <Button type="submit">Sign up</Button>
      </form>

      <Separator className="my-4" />

      <p className="text-sm">
        Don't have an account?{" "}
        <span
          className="underline text-blue-700 cursor-pointer"
          onClick={() => setState("login")}
        >
          Sign Up
        </span>{" "}
      </p>
    </div>
  );
};

export default SignUpCard;
