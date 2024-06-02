import { Link } from "react-router-dom"
import { FooterList } from "../../FooterList"

export const ContactPage = () => (
  <>
    <div>
      Hello
    </div>
    <Link to={`/DobermanClubShop`}>
      Powrót
    </Link>
    <FooterList/>
  </>
)