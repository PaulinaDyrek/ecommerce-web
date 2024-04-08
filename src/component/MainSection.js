import { data } from "../data.js";
import React from "react";
import { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import { TiShoppingCart } from "react-icons/ti";

export default function MainSection() {
  const [products] = useState(data);
  const [value, setValue] = useState(0);
  const { mainImage } = products[value];
  const [amount, setAmount] = useState(0);

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      <article>
        <img src={mainImage} alt="" className="w-full rounded-2xl" />
        <ul
          className="flex items-center justify-start gap-5 flex-wrap mt-5"
          key={data.id}
        >
          {products.map((data, index) => (
            <li
              onClick={() => setValue(index)}
              className={`${
                index === value && "border-2 border-orange-400 opacity-80"
              } border-2 rounded-2xl overflow-hidden cursor-pointer`}
            >
              <img src={data.thumbnail} alt="" className="w-20" />
            </li>
          ))}
        </ul>
      </article>
      <article className="px-8 pb-10">
        <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-sm font-bold inline-block rounded shadow mb-10">
          Sneakers company
        </h2>
        <h1 className="text-slate-900 mb-10 font-bold text-3xl lg:text-4xl">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuringa durable rubber outer sole, they'llwithstand everything the
          weather can offer.
        </p>
        <div className="flex flex-wrap items-center justify-between">
          <ul className="flex items-center gap-5">
            <li className="text-slate-900 font-bold text-2xl">$125.00</li>
            <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-sm font-bold inline-block rounded shadow ">
              50%
            </li>
          </ul>
          <p className="text-slate-600 text-sm">
            <s>$250.00</s>
          </p>
        </div>
        <div className="mt-10">
          <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow">
            <li onClick={() => setAmount(amount - 1)}>
              <img src={minus} alt="" />
            </li>
            <li>{amount}</li>
            <li onClick={() => setAmount(amount + 1)}>
              <img src={plus} alt="" />
            </li>
          </ul>
          <button className="flex items-center justify-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 w-full">
            <TiShoppingCart /> Add to cart
          </button>
        </div>
      </article>
    </section>
  );
}

// $125.00
// 50%
// $250.00

// 0
// Add to cart
