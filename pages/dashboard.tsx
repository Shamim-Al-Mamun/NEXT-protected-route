import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();

  const logOut = (e: any) => {
    e.preventDefault()
    Cookies.remove("loggedin");
    router.push('/')
  };

  return (
    <div>
      <Link href="/">
        <nav>
          <h1>Home</h1>
        </nav>
      </Link>
      <div className="dashboard">
        <h1>You Are Logged In!</h1>
        <button
          type="submit"
          onClick={(e) => logOut(e)}
          style={{ backgroundColor: "#D93025", marginTop: "400px" }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
