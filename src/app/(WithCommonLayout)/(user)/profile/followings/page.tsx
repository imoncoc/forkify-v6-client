"use client";
import { useUser } from "@/src/context/user.provider";
import Followings from "../_component/Followings";

const FollowingPage = () => {
  const { user } = useUser();

  return (
    <div>
      <Followings id={user?.userId!} />
    </div>
  );
};

export default FollowingPage;
