import React from "react";
import Style from "./LoginHome.module.css";
import LoginNav from "../../Components/LoginNav/LoginNav";
import { AiTwotoneSound } from "react-icons/ai";
import Card from "../../Components/Card/Card";
import users from "../../Mockdata/users.json";

function LoginHome() {

  return (
    <header>
      <LoginNav />
      <hgroup>
        <p className={Style.carousel}>
          <AiTwotoneSound className={Style.icon}/>
          <p className={Style.middleText}>
            指揮中心快訊：新增75例COVID-19確定病例，分別為2例本土及73例境外移入
          </p>
        </p>
      </hgroup>
      <section>
        <ul className={Style.cardFlex}>
            {users.map((r) => (
              <div>
              <Card key={r.id} id={r.id} email={r.email} name={r.name} price={r.price}/>
              </div>
            ))}
        </ul>
      </section>
    </header>
  );
}

export default LoginHome;
