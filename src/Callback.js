import * as auth from "./api/auth";

import { useEffect, useState } from "react";

function Callback() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    auth.panggilAPI().then((result) => setMessage(result));
  }, []);

  return (
    <>
      <button onClick={auth.panggilAPI}>Panggil API</button>
      <h1>{message}</h1>
    </>
  );
}

export default Callback;
