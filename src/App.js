import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Header from "./component/Header";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio";
import SocialLinks from "./component/SocialLinks";

function App() {
  return (
   <div>
    <Header></Header>
    <Home></Home>
    <SocialLinks></SocialLinks>
    <Portfolio></Portfolio>
    <Experience></Experience>
    <Contact></Contact>
   </div>
  );
}

export default App;
