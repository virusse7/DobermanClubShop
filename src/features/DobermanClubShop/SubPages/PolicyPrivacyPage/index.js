import { Link } from "react-router-dom";
import { FooterList } from "../../FooterList";
import { Header } from "../../Header/index";

export const PolicyPrivacyPage = () => (
  <>
  <Header>Doberman Club</Header>
  <div>
    Hello policy
  </div>
  <Link to={`/DobermanClubShop`}>
    Powrót
  </Link>
  <FooterList/>
</>
)
