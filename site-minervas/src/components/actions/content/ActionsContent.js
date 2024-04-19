import React, { useState, useEffect } from "react";
import vector from "../../../assets/actions/actions-yellow-vector.svg";
import "./ActionsContent.scss";

function ActionsContent() {
  const [paddingTop, setPaddingTop] = useState(0);

   /* para ajustar a distância entre o título e o conteúdo como um todo */
  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      let newPaddingTop = 430;
      if (windowWidth <= 970) {
        newPaddingTop = 0;
      } else if (windowWidth <= 2500) {
        newPaddingTop = 430 - ((2500 - windowWidth) / 15);
      }
      setPaddingTop(newPaddingTop);
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ height: 140 }}></div>
      <div className="actions-title" id="Actions">
        Ações
        <img className="vector" src={vector} alt="Tracinho amarelo" style={{ width: "3%" }}/>
      </div>
      <div
        className="actions-content"
        style={{ paddingTop: `${paddingTop}px` }}
      ></div>
    </>
  );
}

export default ActionsContent;
