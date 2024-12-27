import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navBodyRef = useRef(null);

  const handleBar = () => {
    navBodyRef.current.classList.toggle("hidden");
  };

  return (
    <>
      <div className="flex container mx-auto justify-between p-2 py-4">
        <a href="/">
          <h1 className="text-3xl font-bold">Duco</h1>
        </a>
        <div className="hidden lg:block">
          <ul className="flex gap-x-4 pt-2">
            <li>Home</li>
            <li>Shop</li>
            <li>Contact</li>
            <li>Account</li>
          </ul>
        </div>
        <div className="lg:hidden" onClick={() => handleBar()}>
          <i className="fa-solid fa-bars text-3xl font-bold"></i>
        </div>
      </div>
      <div className="hidden" ref={navBodyRef}>
        <div>
          <Link to="/" onClick={() => handleBar()} className="p-2 block bg-stone-100 hover:bg-stone-800 hover:text-white">
          Home</Link>
          <Link to="/shop" onClick={() => handleBar()} className="p-2 block bg-stone-100 hover:bg-stone-800 hover:text-white">
          Shop</Link>
          <div className="p-2 bg-stone-100 hover:bg-stone-800 hover:text-white">Contact</div>
          <div className="p-2 bg-stone-100 hover:bg-stone-800 hover:text-white">Account</div>
        </div>
      </div>
    </>
  );
}
