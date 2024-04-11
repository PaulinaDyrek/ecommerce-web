import React from "react";
import logo from "../images/logo.svg";
import avatar from "../images/image-avatar.png";
import { TiShoppingCart } from "react-icons/ti";
import Lightbox from "./Lightbox.js";
export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-5 border-b border-slate-400 max-w-7xl mx-auto">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="" />
          <nav className="hidden">
            <ul className="flex items-center justify-start gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div>
          <ul className="flex items-center justify-start gap-4 text-slate-600">
            <li>
              <button>
                <TiShoppingCart className="text-2xl" />
              </button>
            </li>
            <li>
              <img src={avatar} alt="" className="w-12" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
