import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="w-full p-6 ">
        <div className="flex flex-col md:flex-row lg:flex-row  h-full items-center justify-evenly">
          <div className="mb-4 inline-flex items-center">
            <Logo width="200px" />
          </div>
          <div>
            <p className="text-sm text-gray-600">
              &copy; Copyright 2023. All Rights Reserved by DevUI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
