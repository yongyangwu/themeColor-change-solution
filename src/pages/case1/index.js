import "./index.css";
import React, { useState } from "react";

export default function Case1() {
  const [currentTheme, setCurrentTheme] = useState(true);
  // 实际项目中 currenTheme可以放在全局中进行管理 比如redux
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        场景1深浅两种主题的换肤思路:
        <span style={{ color: "red" }}>切换不同的css类来实现</span>
      </h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setCurrentTheme(true)}>深色</button>
        <button onClick={() => setCurrentTheme(false)}>浅色</button>
      </div>
      <div style={{ display: "flex",justifyContent:'center' }}>
        <div
          className={currentTheme ? "theme-dark" : "theme-light"}
          style={{
            width: 200,
            height: 200,
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          这是换肤区域
        </div>
      </div>
      <div style={{ display: "flex",justifyContent:'flex-start',alignItems:'center', marginTop:30,flexDirection:'column' }}>
        <p style={{color:'red',fontSize:16}}>优点</p>
        <p>1.理解简单</p>
        <p>2.使用最简单的css就可以实现</p>
        <p style={{color:'red',fontSize:16}}>缺点</p>
        <p>主题单一，灵活性差</p>
        <p>样式冗余，不变管理</p>
        <p>无法满足复杂场景需求，实现动态换肤</p>
      </div>
    </div>
  );
}
