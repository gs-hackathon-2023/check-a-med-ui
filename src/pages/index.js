import React from "react";
import Google from "../assets/google.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div
      className={
        "h-screen bg-blue-50 w-screen flex justify-center items-center"
      }
    >
      <div className="flex bg-gradient-to-r p-6 from-green-100 to-blue-200 items-center justify-around flex-col h-3/5 w-2/5 shadow-xl rounded-xl">
        <h1 className="text-7xl font-medium mb-4">CHECKaMED</h1>
        <h3 className="font-medium">
          Get peace of mind with our innovative medication management tool. Stay
          informed of all potential side effects and conflicts with your current
          medicines, and never miss a new update with personalized
          notifications.
        </h3>
        <Link href={"/dashboard"}>
          <button
            className="bg-green-500 p-3 rounded-lg hover:bg-green-400 "
            type="submit"
          >
            <span
              className={
                "flex text-white items-center justify-center space-x-3 text-center"
              }
            >
              <div>Sign in with</div>
              <Google />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
