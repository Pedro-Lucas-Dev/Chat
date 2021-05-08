import React from "react";
import moment from "moment";
import "moment/locale/pt-br";
import "./index.css";

moment.locale("pt-br");

const UserItem = () => {
  return (
    <div class="row user-item-container">
      <div class="col s12 user-item">
        <div class="col s1 center">
          {" "}
          <img
            src="https://image.flaticon.com/icons/png/512/149/149071.png"
            alt="user"
            class="circle responsive-img"
            width={35}
          />
        </div>
        <div class="col s10">
          <p class="no-margin"> +55 21 969210913 </p>

          <p class="message-text no-margin">
            <i class="material-icons icon-message">done_all</i> mensagem atual{" "}
          </p>
        </div>
        <div class="col s1 center">
          <p class="no-margin message-text">{moment().format("dddd")}</p>
          <div class="row">
            {" "}
            <i class="small material-icons">keyboard_arrow_down</i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
