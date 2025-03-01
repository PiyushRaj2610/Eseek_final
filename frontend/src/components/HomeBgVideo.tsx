import { InfiniteScroll } from "../components/HomeComponents/InfiniteScroll";
import { Appbar } from "./HomeComponents/Appbar";

export const HomeBgVideo = () => {
  return (
    <div>
      <div className="text-white z-10">
        <Appbar />
      </div>
      <div className="flex-col w-full h-[87vh] overflow-hidden relative z-10">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-15"
      >
        <source src="/HomeBgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full text-center text-white z-20">
        <div className="pb-28 pt-[2vh]">
          <InfiniteScroll />
        </div>

        <div className="text-7xl font-bold">
          The Ultimate Networking Hub for Gamers
        </div>

        <div className="flex justify-center items-center text-3xl pt-2 w-full">
          <div className="w-[1000px]">
            The ultimate platform for esports players, enabling seamless searches
            for players and teams based on official achievements, gameplay clips,
            roles, and more...
          </div>
        </div>

        <div className=" flex flex-col h-[80px] text-5xl mt-4 pt-6 z-0">
          "Connect. Compete. Conquer!"
        </div>
      </div>
    </div>
    <div className="h-[4vh] z-10 bg-black ">
      <a
        href="https://github.com/PiyushRaj2610"
        target="_blank"
        className="flex justify-center items-center h-full text-2xl tracking-widest font-extrabold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#282929] to-[#282929] hover:from-purple-700 hover:to-blue-400 transition-colors duration-200"
      >
        A B O U T - M E
      </a>
    </div>
    </div>
  );
};
