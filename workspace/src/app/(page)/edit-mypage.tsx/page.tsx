import React from "react";
import EditNameid from "../../../components/edit-nameid";
import CustomButton from "@/components/custom-button";

const page = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="./arrow-black-image.png" />
          <p
            className=" w-screen flex justify-center items-center"
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              marginTop: "20px",
            }}
          >
            マイページを編集
          </p>
        </div>
        <EditNameid />
        <div className="mt-10"></div>
        <CustomButton text="変更を保存" href="./mypage" />
        <a
          style={{ color: "red", marginBottom: "100px", marginTop: "100px" }}
          href="./login"
        >
          ログアウト
        </a>
      </div>
    </div>
  );
};

export default page;
