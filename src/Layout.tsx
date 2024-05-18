// import { Link } from "react-router-dom";
import Button from "./components/Button";
import { useTheme } from "./contexts/themeContext";

const Layout = () => {
  const { themeMode, toggleDarkMode } = useTheme();
  return (
    <div>
      <main className="dark:bg-black  bg-slate-700 w-full h-screen flex items-center">
        <div className="container">
          <p className="text-2xl font-semibold dark:text-neutral-400 ">
            abinash Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consequuntur mollitia nam dolore dolores voluptatem perspiciatis
            possimus. Eos maiores optio delectus non dolorum, ut repellat,
            voluptate libero consequuntur neque possimus nulla. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa nostrum unde culpa
            dignissimos obcaecati natus explicabo delectus voluptatem provident?
            Aliquid aperiam repellat ipsum alias dicta tempora autem molestiae
            explicabo? Maiores.
          </p>
          <Button
            className={
              "absolute top-10 right-10 dark:bg-blue-800 rounded-3xl py-4 px-10 opacity-70 bg-red-400 text-black"
            }
            onClick={toggleDarkMode}
          >
            {themeMode === "dark" ? "light" : "dark"}
          </Button>
        </div>
        {/* <Link to={"/about"}>Home</Link> */}
      </main>
    </div>
  );
};

export default Layout;
