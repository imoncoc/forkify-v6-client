"use client";

import { useUser } from "@/src/context/user.provider";
import NotPremiumMember from "../_component/NotPremiumMember";
import PremiumMember from "../_component/PremiumMember";

const MembershipPage = () => {
  const { user } = useUser();

  return (
    <div>
      {!user?.premiumMembership && <NotPremiumMember userInfo={user!} />}
      {user?.premiumMembership && <PremiumMember />}
    </div>
  );
};

export default MembershipPage;
