import { Profile } from "./components/Profile"
import Search from "./components/Search"
import { BlogContainer, Publication, PublicationContainer } from "./styles"

export function Blog() {
  return (
    <BlogContainer>
      <Profile followers="80" />

      <PublicationContainer>
        <div>
          <h3>Publicações</h3>
          <span>6 Publicações</span>
        </div>
        <Search />

        <Publication></Publication>
      </PublicationContainer>
    </BlogContainer>
  )
}
