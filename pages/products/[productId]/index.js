import React from "react";
import { useRouter } from "next/router";

const productId = () => {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>Details about the product:{productId}</div>;
};

export default productId;
