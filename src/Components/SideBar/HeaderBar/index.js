import React from "react";

const HeaderBar = () => {
  const DEFAULT_ICONS = "Small material-icons";
  return (
    <div class="row  blue-grey">
      <div class="col s9 ">
        {" "}
        <img
          src="https://image.flaticon.com/icons/png/512/149/149071.png"
          alt="user"
          class="circle responsive-img"
          width={35}
        />{" "}
      </div>
      <div class="col s1 ">
        {" "}
        <i class={DEFAULT_ICONS}>data_usage</i>{" "}
      </div>
      <div class="col s1 ">
        {" "}
        <i class={DEFAULT_ICONS}>message </i>{" "}
      </div>
      <div class="col s1 ">
        {" "}
        <i class={DEFAULT_ICONS}>more_vert</i>{" "}
      </div>
    </div>
  );
};

export default HeaderBar;
