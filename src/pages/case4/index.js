// import "./index.less";
import React, { useState } from "react";
import {Button} from 'antd'

export default function Cas4() {
  const [currentTheme, setCurrentTheme] = useState(true);
  
  const changeTheme =()=>{
    console.log(window.less.modifyVars)
    window.less.modifyVars({'@primary-color':'blue'})
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        任意主题色的换肤思路:
        <span style={{ color: "red" }}>利用less的modifyVars函数实现</span>
      </h1>
      <div style={{ textAlign: "center" }}>
        <button onClick={changeTheme}>颜色选择器</button>
      </div>
      <div style={{ display: "flex",justifyContent:'center' }}>
        <div
          style={{
            width: 200,
            height: 200,
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button type="primary">antd</Button>
          
        </div>
      </div>
      <div style={{ display: "flex",justifyContent:'flex-start',alignItems:'center', marginTop:30,flexDirection:'column' }}>
        <p>demo场景测试antd换肤</p>
        {/* <p style={{color:'red',fontSize:16}}>优点</p>
        <p>1.理解简单</p>
        <p>2.使用最简单的css就可以实现</p>
        <p style={{color:'red',fontSize:16}}>缺点</p>
        <p>主题单一，灵活性差</p>
        <p>样式冗余，不变管理</p>
        <p>无法满足复杂场景需求，实现动态换肤</p> */}
      </div>

    </div>
  );
}