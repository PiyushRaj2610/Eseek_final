import axios from "axios";
import { InputField } from "./SignUpBox";
import { useRef } from "react";

export const SignUpDetails = () => {
  const Gamertag = useRef<HTMLInputElement>(null);
  const EmailId = useRef<HTMLInputElement>(null);
  const Password = useRef<HTMLInputElement>(null);
  const Game = useRef<HTMLInputElement>(null);
  const Role = useRef<HTMLInputElement>(null);
  const Achievements = useRef<HTMLInputElement>(null);
  const Clips = useRef<HTMLInputElement>(null);
  const Experience = useRef<HTMLInputElement>(null);
  const TeamName = useRef<HTMLInputElement>(null);

  async function signUp() {
    try {
      const response = await axios.post("backend_url", {
        email: EmailId.current?.value, // if ref is null then also works
        username: Gamertag.current?.value,
        password: Password.current?.value,
        games: Game.current?.value,
        role: Role.current?.value
      });

      const data = response.data;
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log("Signup error:", error);
    }
  }

  async function getValue() {
    try {
      const response = await axios.get("backend_url", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  }

  return (
    <div className="w-full max-w-2xl p-5 space-y-6 my-6">
      <div className="flex justify-center items-center flex-col pt-12 pb-10 border border-b-white">
        <div className="flex justify-center items-center text-white text-4xl font-semibold tracking-wider">
          <div className="bg-red-300 h-60 w-60 rounded-full overflow-hidden opacity-50 cursor-pointer">
            <img 
              src="./src/assets/dum.jpeg" 
              className="h-full w-full object-cover rounded-full"
              alt="Profile"
            />
          </div>
        </div>
        <div className="text-white pt-4">ADD PFP</div>
      </div>

      <div className="flex justify-center items-center flex-col pt-12 pb-10 border border-b-white">
        <div className="text-white text-4xl font-semibold tracking-wider">
          PERSONAL DETAILS
        </div>
        <InputField label="*Gamertag" ref={Gamertag} placeholder="Enter your unique tag" />
        <InputField label="*Email-Id" ref={EmailId} placeholder="Enter your email-id" />
        <InputField label="*Password" ref={Password} placeholder="Create a new password" />
      </div>

      <div className="flex justify-center items-center flex-col pt-15 pb-10">
        <div className="text-white text-4xl font-semibold tracking-wider">
          GAME INFORMATION
        </div>
        <InputField label="*Game" ref={Game} placeholder="Enter the games you play" />
        <InputField label="*Role" ref={Role} placeholder="Enter your role" />
        <InputField label="*Achievements" ref={Achievements} placeholder="Enter Official/ Unofficial achievements" />
        <InputField label="*Clips" ref={Clips} placeholder="Yes / No" />
        <InputField label="*Experience (in years)" ref={Experience} placeholder="Enter your experience" />
        <InputField label="Team Name (if no - enter NA)" ref={TeamName} placeholder="Enter the name of your team" />
      </div>

      <div className="flex justify-center items-center pt-3">
        <button
          onClick={signUp}
          className="text-white flex rounded-sm justify-center items-center bg-[#282929] hover:text-black hover:bg-gradient-to-r from-purple-800 to-blue-500 transition-all duration-100 pl-4 pr-4 mt-10 cursor-pointer"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};
