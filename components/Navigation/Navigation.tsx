import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-2 bg-slate-300 h-20">
      <Link className="h-full flex items-center" href={"/"}>
        <img className="w-32" src="./logo.png" alt="brand logo" />
      </Link>
      <Link
        className="bg-yellow-400 hover:bg-yellow-500  transition-colors duration-200 p-2 pl-4 pr-4 text-black font-bold rounded-lg text-center"
        href={"/courses"}
      >
        Courses
      </Link>
    </nav>
  );
};

export default Navigation;
