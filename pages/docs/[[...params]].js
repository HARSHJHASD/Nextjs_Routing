import { useRouter } from "next/router";
import React from "react";
///localhost/docs/ddbwefjbwe(kuch bhi)
//you will be redirected to this page only.

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        Docs for Feature {params[0]} and concept {params[1]}.
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Docs for Feature {params[0]}.</h1>;
  }
  return <div>Docs Home Page with more than 2 params</div>;
};

export default Doc;
