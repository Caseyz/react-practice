import React, { useState, useEffect } from "react";
import Service from "../../mocks/index";
const Head = React.lazy(() => import("../components/Header"));

export default function Index() {
  return (
    <div>
      <React.Suspense fallback={<div>loading...</div>}>
        <Head />
      </React.Suspense>
    </div>
  );
}
