import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <a href="/">
          <Image src="/logo.png" alt="Logo" width={180} height={40} priority />
        </a>
      </header>
      <hr />
    </>
  )
}