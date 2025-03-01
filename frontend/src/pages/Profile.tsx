import DataBox from "../components/ProfilePage/DataBox";
import { ProfileHeading } from "../components/ProfilePage/ProfileHeading";

export const Profile = () => {
  return (
      <div className="h-[100vh] w-full flex flex-col bg-[#0e0b0b] text-white">
  
        {/* Navbar */}
        <nav className="bg-[#000000] border-[#282929] border-b-[0.5px] h-[8vh] flex items-center justify-between px-10">
          <div className="text-3xl font-bold tracking-widest cursor-pointer">
            E-SEEK
          </div>
          <img
            src="../src/assets/pfp.jpeg"
            className="h-10 w-10 object-cover rounded-full border-[0.5px] border-white cursor-pointer"
            alt="Profile"
          />
        </nav>

        <div className="h-[92vh] w- flex ">

          {/* left */}
          <div className="w-[30vw] h-full border-r-[1px] border-gray-500">
            <div className="h-[32vh] flex justify-center items-center">
              <img
                src="../src/assets/pfp.jpeg"
                className="h-40 w-40 object-cover rounded-full border border-white cursor-pointer"
                alt="Profile"
              />
            </div>
            <div className="text-5xl flex justify-center items-center">
                HEY NAME
              </div>
            <div className="pl-[3vh] pr-[2vh] text-3xl">
              <br/>
              <br/>
              Email-Id : 
              <br/>
              <br/>
              Gamertag : 
              <br/>
              <br/>
              Device : 
              <br/>
              <br/>
              Current Team : 
              <br/>
              <br/>
              Clips :  
              <a href="https://www.google.com"> Click to view clips</a>
            </div>  
          </div>


          {/* middle */}
          <div className="w-[70vw] h-full border-gray-500">
            <div className="h-[20vh] text-5xl font-bold tracking-widest flex justify-center">
              <ProfileHeading text="WELCOME WARRIOR" />
            </div>
            <div className="pt-[2vh] ">
              <div className=" p-6 pl-[5vh] pr-[5vh] flex justify-between">
                <DataBox title="ACHIEVEMENTS" description="somthing" />
                <DataBox title="ROLE" description="somthing" />
                <DataBox title="ROLE" description="somthing" />
              </div>
              <div className="p-6 pl-[5vh] pr-[5vh] flex justify-between">
                <DataBox title="GAMES" description="games i play" />
                <DataBox title="EXPERIENCE" description="somthing" />
                <DataBox title="EXPERIENCE" description="somthing" />
              </div>
              
            </div>
            
          </div>
        </div>
  
        
      </div>
    );
}