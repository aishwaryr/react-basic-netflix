// @flow

import React from "react";
import preload from "../data.json";

const Data = () => (
  <div className="search">
    <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
  </div>
);

export default Data;
