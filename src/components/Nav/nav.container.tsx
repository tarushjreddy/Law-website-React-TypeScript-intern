import React, { useEffect, useGlobal } from "reactn";
import NavView from "./nav.view";

interface NavProps {
  defaultScrolled?: boolean;
}

const Nav: React.FC<NavProps> = ({ defaultScrolled = false }) => {
  const { isLoginned, name } = useGlobal("userDetail")[0];

  // const homeSection = useScrollSection("home");
  // const aboutSection = useScrollSection("about");
  // const adviceSection = useScrollSection("advice");
  // const portfolioSection = useScrollSection("portfolio");
  const [scrolled, setScrolled] = React.useState(defaultScrolled);
  const [showSearch, setShowSearch] = React.useState(false);
  const [showSearch1, setShowSearch1] = React.useState(false);

  const lang = localStorage.getItem("lang") || "en";

  const handleScroll = () => {
    if (window) {
      const offset = window.scrollY;

      // window.scrollTo(0, 0);
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  useEffect(() => {
    if (window && !defaultScrolled) {
      window.addEventListener("scroll", handleScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavView
      isLoginned={isLoginned}
      scrolled={scrolled}
      setShowSearch={setShowSearch}
      showSearch={showSearch}
      setShowSearch1={setShowSearch1}
      showSearch1={showSearch1}
      name={name}
      lang={lang}
    />
  );
};

export default Nav;
