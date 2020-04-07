import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import "./Tool.css";

const Tool = ({ name, durability }) => {
  const [cookie, setCookie] = useCookies([`AC-tools-counter`]);

  const [count, setCount] = useState(parseInt(cookie[name]) || 0);

  useEffect(() => {
    setCookie(name, count);
  }, [count]);

  return (
    <div className="counter" style={{ textAlign: "center" }}>
      <div>
        <button onClick={() => count < durability && setCount(count + 1)}>
          <img
            src={`/tools/${name}.png`}
            alt={name}
            style={{ width: "100%" }}
          />
        </button>
      </div>
      <div className="counter__content">
        <p>
          <button
            className="counter__action counter__action"
            onClick={() => count > 0 && setCount(count - 1)}
          >
            -1
          </button>
        </p>
        <p>
          <button
            className="counter__action counter__action--warn"
            onClick={() => count > 0 && setCount(0)}
          >
            Reset
          </button>
        </p>
        <p>
          {count}/{durability}
        </p>
      </div>
    </div>
  );
};

export default Tool;
