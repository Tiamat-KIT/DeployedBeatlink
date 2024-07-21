/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import EditNameid from "../../../components/edit-nameid";
import CustomButton from "../../../components/custom-button";
import { SignOutButton } from "@clerk/nextjs";
import NavBer from "../../../components/NavBar"

const page = () => {
  return (
    <div>
      <NavBer />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <EditNameid />
        <div className="mt-10"></div>
        <CustomButton text="変更を保存" href="./mypage" />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px",
        }}
      >
        <SignOutButton>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            ログアウト
          </button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default page;
