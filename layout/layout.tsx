import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const { asPath } = router;
  const noNav = [
    "/FocusAgency",
    "/GameQuiz",
    "/Portfolio",
    "/WeatherApp",
    "/NetflixClone",
    "/Ecommerce",
    "/WordleGame",
    "/Testing",
  ];
  return (
    <>
      {noNav.includes(asPath) ? null : <Navbar />}
      {children}
      {/* {noNav.includes(asPath) ? null : <Footer />} */}
    </>
  );
};

export default Layout;
