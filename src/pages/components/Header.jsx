import React, { useState, useEffect } from "react";
import Service from "../../mocks/index";

export default function Header() {
  const [name, setName] = useState("");
  useEffect(() => {
    (async function (params) {
      let result = await Service.getName();
      setName(result.name);
    })();
  }, []);

  return <div>header</div>;
}
