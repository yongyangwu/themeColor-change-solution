import "./index.scss";

import React, { useState } from "react";
import { SketchPicker } from "react-color";

export default function Case4() {

  const onColorChange = (color) => {
    console.log(22)
    document.documentElement.style.setProperty('--theme-color',color)

  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        场景4 动态主题的换肤思路:
        <span style={{ color: "red" }}>使用css变量来实现</span>
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SketchPicker color="#1890ff" onChange={({ hex }) => {
              onColorChange(hex);
            }} />

      </div>
      <div className="container" style={{ display: "flex", border:'1px solid lightgray',height:300 }}>
      这是换肤区域
      {/* <Button type="primary">Primary</Button> */}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 30,
          flexDirection: "column",
        }}
      >

      </div>
    </div>
  );
}
