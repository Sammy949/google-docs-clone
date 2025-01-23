import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-2 items-center shrink-0 pr-6">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={28} height={28} />
        </Link>
        <h3 className="text-xl font-semibold">Docs</h3>
      </div>
      <SearchInput />
      <div className="flex gap-3 items-center pl-6">
        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterSelectPersonalUrl="/"
        />
        <UserButton />
      </div>
    </nav>
  );
};
export default Navbar;
