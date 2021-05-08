import React from "react";
import "./index.css";
import Icon from "./Icon";

const HeaderBar = () => {
  const icons = ["data_usage", "message", "more_vert"];

  return (
    <div class="row  blue-grey HeaderBar" id="teste">
      <div class="col s9 ">
        <img
          src="https://image.flaticon.com/icons/png/512/149/149071.png"
          alt="user"
          class="circle responsive-img"
          width={35}
        />
      </div>
      {icons.map((icon) => (
        <Icon iconName={icon} />
      ))}
    </div>
  );
};

export default HeaderBar;
