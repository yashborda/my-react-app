import React, { useState, useEffect } from "react";

const Effect = () => {
  const [constn, setConstn] = useState(0);

  useEffect(() => {
    console.log("Sdf");
  }, [constn]);

  return (
    <>
      <div>{constn}</div>
      <button onClick={ () => setConstn(constn + 1)}>Test</button>
    </>
  );
};

export default Effect;
