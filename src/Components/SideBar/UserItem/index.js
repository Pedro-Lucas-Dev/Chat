import React from "react";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

const UserItem = () => {
  return (
    <div class="row">
      <div class="col s12">
        <div class="col s1"> user Img </div>
        <div class="col s10">
          <div class="row"> numero/nome </div>
          <div class="row"> mensagem atual </div>
        </div>
        <div class="col s1">
          <div class="row">{moment().format("dddd")}</div>
          <div class="row">
            {" "}
            <i class="small material-icons">arrow_drop_down</i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
