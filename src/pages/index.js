import React from "react";
import Google from "../assets/google.svg";
import Logo from "../assets/logo.svg";
import Link from "next/link";


export default function Home() {
  return (
    <div
      className={
        "h-screen bg-blue-50 w-screen flex justify-center items-center"
      }
    >
      <div className="flex bg-gradient-to-r p-6 from-green-100 to-blue-200 items-center justify-around flex-col h-5/5 w-2/5 shadow-xl rounded-xl space-y-4">
        <Logo />

       <h3 className="flex font-medium text-center" >
          Eliminating dangerous interactions, one pill at a time. <br></br>
          Stay informed about all potential side effects <br></br> and negative drug interactions 
          between your current medicines. 
          <br></br>Never miss an update through our personal notifications.
          
        </h3>
        <form className="bg-white p-6 rounded-lg shadow-md ">
          <h2 className="text-lg font-medium mb-4">Please Sign In:</h2>
          <div className="mb-4 " >
            <label className="block text-gray-700 font-medium mb-2" >
              User ID
            </label>
            <input
                className="w-full p-3 bg-gray-200 rounded-lg"
                type="text"
                id="userId"
                name="userId"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
            </label>
            <input
                className="w-full p-3 bg-gray-200 rounded-lg"
                type="password"
                id="password"
                name="password"
            />
          </div>
          <div className="flex items-center justify-between space-x-2 space-y-2">
            <button
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500"
                type="submit"
            >
                <div>Sign In</div>
            </button>
            <a className="text-blue-600 hover:text-blue-500" href="#">
                Forgot password?
            </a>
            <Link href={"/dashboard"}>
            <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-500 ">
              <span className={"flex  items-center justify-center space-x-3 text-center"}>
                <div>Sign in with</div>
                <Google />
              </span>
            </button>
          </Link>
            
          </div>
        </form>
      </div>
    </div>
  );
}
