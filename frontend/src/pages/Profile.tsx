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



// import React from "react";

// const GamerProfile = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center py-4">
//         <h1 className="text-xl font-bold text-blue-400">GamerConnect</h1>
//         <div className="space-x-6">
//           <a href="#" className="hover:text-blue-300">Home</a>
//           <a href="#" className="hover:text-blue-300">Dashboard</a>
//           <a href="#" className="hover:text-blue-300">Players</a>
//           <a href="#" className="hover:text-blue-300">Teams</a>
//         </div>
//         <div className="space-x-4">
//           <button className="text-gray-300">Log in</button>
//           <button className="bg-blue-500 px-4 py-2 rounded text-white">Sign up</button>
//         </div>
//       </nav>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
//         {/* Profile Card */}
//         <div className="bg-gray-800 p-6 rounded-lg">
//           <img
//             src="https://via.placeholder.com/100"
//             alt="Profile"
//             className="rounded-full mx-auto mb-4"
//           />
//           <h2 className="text-center text-xl font-semibold">Alex Johnson</h2>
//           <p className="text-center text-gray-400">@ProGamer123</p>
//           <div className="text-center mt-2">
//             <span className="bg-blue-600 px-3 py-1 rounded text-sm">Rifler / Entry Fragger</span>
//             <span className="ml-2 bg-gray-700 px-3 py-1 rounded text-sm">5 years</span>
//           </div>
//           <p className="text-center text-gray-400 mt-2">📍 Los Angeles, CA</p>
//           <div className="mt-4">
//             <button className="w-full bg-blue-500 py-2 rounded mb-2">Message</button>
//             <button className="w-full bg-gray-700 py-2 rounded">Contact</button>
//           </div>
//         </div>

//         {/* About Section */}
//         <div className="bg-gray-800 p-6 rounded-lg col-span-2">
//           <h3 className="text-lg font-semibold">About</h3>
//           <p className="text-gray-400 mt-2">
//             Professional FPS player with 5+ years of competitive experience.
//             Specializing in tactical shooters and battle royales. Former champion
//             of the Regional Masters Tournament.
//           </p>
//         </div>
//       </div>

//       {/* Main Games Section */}
//       <div className="bg-gray-800 p-6 rounded-lg mt-6">
//         <h3 className="text-lg font-semibold">Main Games</h3>
//         <div className="mt-4 space-y-4">
//           <div className="bg-gray-700 p-4 rounded flex justify-between items-center">
//             <span>🎮 Valorant</span>
//             <span className="text-gray-400">3k+ hours</span>
//             <span className="bg-gray-900 px-3 py-1 rounded">Radiant</span>
//           </div>
//           <div className="bg-gray-700 p-4 rounded flex justify-between items-center">
//             <span>🎮 CS:GO</span>
//             <span className="text-gray-400">5k+ hours</span>
//             <span className="bg-gray-900 px-3 py-1 rounded">Global Elite</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GamerProfile;
