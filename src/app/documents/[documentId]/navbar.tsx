import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image src="/logo.svg" alt="Logo" width={36} height={36} />
    </nav>
  );
};
export default Navbar;
