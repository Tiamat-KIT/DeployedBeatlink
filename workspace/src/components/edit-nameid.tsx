import React from "react";
import App from "./image-app";

const EditNameid = () => {
  return (
    <div
      className="bg-stone-200 flex py-7 my-20 px-20"
      style={{
        borderRadius: "20px",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      <App />
      <div style={{ margin: "5px" }}>
        <input
          type="text"
          placeholder="名前を設定してください"
          className="input input-bordered w-60 "
        />
      </div>
    </div>
  );
};

export default EditNameid;
