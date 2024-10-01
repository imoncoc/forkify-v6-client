import Link from "next/link";
import React from "react";

const Header = () => {
  const [open, setOpen] = useState(true);

  const menuItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/tips-list">All Tips</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>

      <li>
        <Link href={`/dashboard/user`}>Dashboard</Link>
      </li>
    </>
  );
  return <div>Header</div>;
};

export default Header;
