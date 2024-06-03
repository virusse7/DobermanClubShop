import { FooterList } from "../../FooterList";
import { Link } from "react-router-dom";
import { Header } from "../../Header/index";

export const RegulationsPage = () => (
  <>
  <Header>Doberman Club</Header>
  <Link to={`/DobermanClubShop`}>
      Powrót
    </Link>
  <FooterList/>
  </>
)