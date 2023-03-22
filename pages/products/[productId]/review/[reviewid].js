import React from "react";
import { useRouter } from "next/router";

const reviewid = () => {
  const router = useRouter();
  const {productId, reviewid } = router.query;
  return <h1>product :{ productId} has review id:{reviewid}</h1>;
};

export default reviewid;
