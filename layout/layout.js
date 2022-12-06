import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;
  const noNav = [
    "/FocusAgency",
    "/GameQuiz",
    "/Portfolio",
    "/WeatherApp",
    "/NetflixClone",
    "/Ecommerce",
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
