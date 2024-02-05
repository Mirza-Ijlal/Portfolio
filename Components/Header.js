import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="NAVBAR  ">
        <div className="navi">

          <div className="logo">
            
              <h1>M I </h1>
            
          </div>

          <div className="linki">
            <Link className=""  href="/Home">
              Home
            </Link>
            <Link className="" href="/About">
              Products
            </Link>

            <Link className="" href="/Projects">
              Projects
            </Link>

            <Link className="" href="/Contact">
             Contact
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;
