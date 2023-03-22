import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1>This is Home page.</h1>
        <Link  target="blank" href="/blog">Blog</Link>
      <br></br>
        <Link target="blank" href="/about">About</Link>
        <br></br>
        <Link  target="blank" href="/contact">Contact</Link>
        <br></br>
        <Link  target="blank" href="/products">Products</Link>
      </main>
    </>
  );
}
