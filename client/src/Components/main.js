import React from "react";

function main() {
  return (
    <>
      <form style={{ display: "grid", width: "20%", margin: "auto" }}>
        <div style={{display:"grid",}}>
          <label>Todo</label>
          <input type="text"/>
        </div>
        <div style={{display:"grid",}}>
          <label>Description</label>
          <input type="text"/>
        </div>
        <div>
          <input type="checkbox"/>
          <label><small>check before  Submit</small></label>
        </div>
       
      </form>
    </>
  );
}

export default main;
