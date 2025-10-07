import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-50">
      <Image src="tip-calculator-app-main/images/logo.svg" alt="Logo" width={100} height={100} />
      <div className="bg-white p-8 rounded-2xl m-5 shadow-lg w-full max-w-3xl">
      <div className="grid grid-cols-1 gap-12 p-5 md:grid-cols-2">
        <div className="text-cyan-900 font-bold text-xl flex flex-col gap-6">
        <p>Bill</p>
        <input placeholder="0" className="bg-gray-100 rounded-md p-2 w-full"/>
        <p>Select Tip %</p>
        <div className="grid grid-cols-3 gap-2">
          {[5, 10, 15, 25, 50].map((tip) => (
          <button key={tip} className="bg-cyan-900 text-white rounded-md p-2 w-full">
            {tip}%
          </button>
          ))}
          <input placeholder="Custom" className="bg-gray-100 rounded-md p-2 w-full" />
        </div>
        <p>Number of People</p>
        <input placeholder="0" className="bg-gray-100 rounded-md p-2 w-full" />
        </div>
        <div className="bg-cyan-900 text-white rounded-2xl p-6 flex flex-col justify-between">
          <div className="grid grid-rows-2 gap-6">
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-sm">Tip Amount</p>
                <p className="text-xs text-gray-400">/ person</p>
              </div>
              <p className="text-3xl font-bold">$0.00</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div>
                <p className="text-sm">Total Amount</p>
                <p className="text-xs text-gray-400">/ person</p>
              </div>
              <p className="text-3xl font-bold">$0.00</p>
            </div>
          </div>
        <button className="bg-cyan-300 text-cyan-900 font-bold rounded-md p-2 w-full ">RESET</button>
        </div>
      </div>
      </div>
    </div>
  );
}
