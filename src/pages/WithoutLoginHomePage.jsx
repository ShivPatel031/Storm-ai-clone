import { Footer } from "../components/WOL/WOLFooter";
import { WithoutLoginHomeContent } from "../components/WOL/WOLHomeConentent";
import { Navbar } from "../components/WOL/WOLNavbar";


function WithoutLoginHomePage() {
  return (
    <>
        <Navbar />
        <WithoutLoginHomeContent />
        <Footer />
    </>
  );
}

export { WithoutLoginHomePage };
