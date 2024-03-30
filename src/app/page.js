"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      if (Cookies.get("UserType") == "HR") {
        router.push("users/HR/Dashboard");
      }
      if (Cookies.get("UserType") == "USER") {
        router.push("users/USER/Dashboard");
      } else {
        router.push("auth");
      }
    }, 2000);
  }, []);
  return (
    <div className="flex-1 flex justify-center items-center h-screen w-full text-3xl font-bold">
      Welcome
    </div>
  );
};

export default page;
