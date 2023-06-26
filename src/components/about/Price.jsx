import React from "react";
import { BiLockOpen } from "react-icons/bi";

const Price = ({ items, Heading }) => {
  return (
    <>
      <div className="about_price">
        <Heading title="Fair Price" />
        <div className="about_price_content">
          {items.price.map((val) => {
            return (
              <div className="cards">
                <i>{val.icons}</i>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
                <h1>${val.pri}</h1>
                <p>per price</p>

                <button className="button">
                  <BiLockOpen className="icons" />
                  <span>LET's START</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Price;
