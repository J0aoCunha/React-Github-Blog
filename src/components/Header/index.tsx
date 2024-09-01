import { HeaderContainer } from "./styles"
import githubImage from "../../assets/image.png"

export function Header() {
  return (
    <HeaderContainer>
      <img src={githubImage} alt="" />
    </HeaderContainer>
  )
}
