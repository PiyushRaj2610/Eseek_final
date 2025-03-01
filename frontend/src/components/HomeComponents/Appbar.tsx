import "../../components/styles/Appbar.css";
import { Button } from "./Button";

export const Appbar = () => {
  return (
    <div className="bg-[#000000] border-[#282929] border-b-[0.5px] h-20 flex flex-row items-center justify-center pl-10">
      <div className="h-full w-full flex flex-start items-center pt-0">
        <div className="fixed z-20 w-full cursor-pointer text-3xl font-bold tracking-widest">
          E-SEEK
        </div>
      </div>

      <div className="h-full w-full flex mr-10 justify-between items-center">
        <div className="flex items-center pl-[22vw] ">
          <Button>Sign Up</Button>
        </div>
        <div className="flex justify-center items-center pr-[6vw]">
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};
