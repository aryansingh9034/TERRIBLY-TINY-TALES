import userData from "@/assets/user.json";
import BoxText from "../BoxText";
import { GoVerified } from "react-icons/go";
import { FaRegStar, FaHeart } from "react-icons/fa";
import { GrLike } from "react-icons/gr";
import { ImEye } from "react-icons/im";
import { GiEnlightenment } from "react-icons/gi";
import { PiSunDimBold } from "react-icons/pi";
const ProfileView = () => {
  return (
    <div className=" border-b-2 bg-slate-50 pb-10">
      <div className="bg w-full h-96">
        <img
          src={userData.bgImg}
          className="w-full h-full object-cover"
          alt="Profile Background Image"
        />
      </div>
      <div className="">
        <div className="ml-4 profile-head flex ">
          <img
            src={userData.profileImg}
            alt="profile image"
            className="-mt-28 h-48 w-48 rounded-full"
          />
          <div className="ml-2 profileDetails">
            <div className="flex text-black text-base sm:text-xl lg:text-2xl font-bold items-center justify-center lg:gap-2 gap-1">
              <h3 className="">{userData.name} </h3>
              <div className="icons flex  justify-center items-center gap-1 sm:gap-2">
                {userData.isVerified && (
                  <GoVerified className="text-pink-500 text-sm sm:text-2xl " />
                )}
                <span className="bg-purple-500 text-sm sm:text-base  sm:p-1 rounded-full">
                  <GiEnlightenment className=" text-white" />
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <BoxText num={userData.followers} text="Followers" />
              <BoxText num={userData.following} text="Following" />
            </div>
          </div>
        </div>
        <div className="profile-disc ml-4 mt-6 text-xl">
          <h3 className="text-black">{userData.shortDisc}</h3>
          <a href={userData.socialLink} className="text-base text-blue-400">
            {userData.socialLink}
          </a>
          <div className="flex mt-4 gap-4 pb-4">
            <div className="flex gap-2 text-sm items-center">
              <div className="w-fit bg-blue-400 rounded-full p-2">
                <FaRegStar className="text-white  " />
              </div>
              <p className="text-black">{userData.star}</p>
            </div>
            <div className="flex gap-2  text-sm items-center">
              <div className="w-fit bg-yellow-400 rounded-full p-2">
                <GrLike className="text-white" />
              </div>
              <p className="text-black">{userData.like}</p>
            </div>
            <div className="flex gap-2 text-sm items-center">
              <div className="w-fit bg-slate-500 rounded-full p-2">
                <ImEye className="text-white" />
              </div>
              <p className="text-black">{userData.viewed}</p>
            </div>
            <div className="flex gap-2 text-sm items-center">
              <div className="w-fit bg-pink-600 rounded-full p-2">
                <FaHeart className="text-white" />
              </div>
              <p className="text-black">{userData.heart}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
