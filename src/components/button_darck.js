import React, { useState, useEffect } from "react";

const DarckMode = () => {
  const [theme, setTheme] = useState(false);
  let ls = localStorage;
  if (ls.getItem("theme") === null) {
    ls.setItem("theme", "lihgt");
  }

  const active = () => {
    if (!theme) {
      setTheme(true);
      ls.setItem("theme", "darck");
    } else {
      setTheme(false);
      ls.setItem("theme", "light");
    }
  };
  useEffect(() => {
    switch (theme) {
      case false:
        window.alert("falsa");
        break;
      case true:
        window.alert("true");
        break;

      default:
        break;
    }
  }, [theme]);
  console.log(theme);
  return (
    <>
      <button className="bt-changer-theme" onClick={active}>
        {!theme ? `Darck Mode` : `lihgt Mode`}
      </button>
    </>
  );
};
export default DarckMode;
