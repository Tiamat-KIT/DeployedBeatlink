import React from "react";

const Genre = () => {
  return (
    <div
      className="w-screen"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p style={{ fontSize: "30px" }}>好きなジャンル</p>
      <div
        className="bg-stone-200 flex py-7 my-5 md:w-1/3 w-4/5 "
        style={{
          borderRadius: "20px",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <p>好きな曲のジャンルを設定しよう！</p>
      </div>
    </div>
  );
};

export default Genre;
