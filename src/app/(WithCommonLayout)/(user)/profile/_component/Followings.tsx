"use server";
import { getAllUserFollowing } from "@/src/services/profile";

const Followings = async ({ id }: { id: string }) => {
  const { data } = await getAllUserFollowing(id);

  return <div>Followings</div>;
};

export default Followings;
