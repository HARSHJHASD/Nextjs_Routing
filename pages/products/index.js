import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const index = ({ productId = 100 }) => {
  const router = useRouter();

  const handleSubmit = () => {
    console.log("Button has been clicked");
    router.push("/about");
  };

  return (
    <div>
      <Link href="/">
        <h1>Harsh jha</h1>
      </Link>
      <ul>
        <Link href="/products/1">
          <li>p1</li>
        </Link>
        <Link href="/products/2">
          <li>p2</li>
        </Link>
        <Link href="/products/3">
          <li>p3</li>
        </Link>
        <Link href={`/products/${productId}`}>
          <li>p{productId}</li>
        </Link>
      </ul>
      <button onClick={handleSubmit}>About Section</button>
    </div>
  );
};

export default index;
