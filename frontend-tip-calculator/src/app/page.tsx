"use client";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import { useState } from "react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const tipAmountPerPerson =
    numberOfPeople > 0 ? (bill * (tipPercentage / 100)) / numberOfPeople : 0;
  const totalAmountPerPerson =
    numberOfPeople > 0
      ? (bill + bill * (tipPercentage / 100)) / numberOfPeople
      : 0;

  return (
    <div
      className={`${spaceMono.className} flex flex-col items-center justify-center min-h-screen bg-cyan-50`}
    >
      <Image
        src="tip-calculator-app-main/images/logo.svg"
        alt="Logo"
        width={100}
        height={100}
      />
        <div className="grid grid-cols-1 gap-12 p-5 md:grid-cols-2">
          <div className="text-cyan-900 font-bold text-xl flex flex-col gap-6">
            <p>Bill</p>
            <div className="relative flex items-center">
              <Image
                src="tip-calculator-app-main/images/icon-dollar.svg"
                alt="Dollar Icon"
                width={11}
                height={17}
                className="absolute left-3"
              />
              <input
                placeholder="0"
                className="bg-gray-100 rounded-md p-2 w-full text-right pl-8"
                type="number"
                value={bill === 0 ? "" : bill}
                onChange={(e) => setBill(parseFloat(e.target.value) || 0)}
              />
              {bill === 0 && (
                <p className="text-red-500 text-xs absolute -top-5 right-0">
                  Can&#39;t be zero
                </p>
              )}
            </div>
            <p>Select Tip %</p>
            <div className="grid grid-cols-3 gap-2">
              {[5, 10, 15, 25, 50].map((tip) => (
                <button
                  key={tip}
                  className={`rounded-md p-2 w-full 
            ${
              tipPercentage === tip
                ? "bg-cyan-500 text-cyan-900"
                : "bg-cyan-900 text-white hover:bg-cyan-700 active:bg-cyan-500"
            }`}
                  onClick={() => setTipPercentage(tip)}
                >
                  {tip}%
                </button>
              ))}
              <input
                placeholder="Custom"
                className="bg-gray-100 rounded-md p-2 w-full"
                onChange={(e) =>
                  setTipPercentage(parseFloat(e.target.value) || 0)
                }
                type="number"
              />
            </div>
            <p>Number of People</p>
            <div className="relative flex items-center">
              <Image
                src="tip-calculator-app-main/images/icon-person.svg"
                alt="Person Icon"
                width={11}
                height={17}
                className="absolute left-3"
              />
              <input
                placeholder="0"
                className="bg-gray-100 rounded-md p-2 w-full text-right pl-8"
                type="number"
                value={numberOfPeople === 0 ? "" : numberOfPeople}
                onChange={(e) =>
                  setNumberOfPeople(parseInt(e.target.value) || 0)
                }
              />
              {numberOfPeople === 0 && (
                <p className="text-red-500 text-xs absolute -top-5 right-0">
                  Can&#39;t be zero
                </p>
              )}
            </div>
          </div>
          <div className="bg-cyan-900 text-white rounded-2xl p-6 flex flex-col justify-between">
            <div className="grid grid-rows-2 gap-6">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-sm">Tip Amount</p>
                  <p className="text-xs text-gray-400">/ person</p>
                </div>
                <p className="text-3xl font-bold">
                  ${tipAmountPerPerson.toFixed(2)}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-sm">Total Amount</p>
                  <p className="text-xs text-gray-400">/ person</p>
                </div>
                <p className="text-3xl font-bold">
                  ${totalAmountPerPerson.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="bg-cyan-300 text-cyan-900 font-bold rounded-md p-2 w-full hover:bg-cyan-200 active:bg-cyan-100"
              onClick={() => {
                setBill(0);
                setTipPercentage(0);
                setNumberOfPeople(1);
              }}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
  );
}
