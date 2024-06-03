import { Link } from "react-router-dom";
import { FooterList } from "../../FooterList";
import { Header } from "../../Header/index";

export const ContactPage = () => (
  <>
    <Header>Doberman Club</Header>
    <div>
      Hello
    </div>
    <Link to={`/DobermanClubShop`}>
      Powrót
    </Link>
    <FooterList/>
  </>
)