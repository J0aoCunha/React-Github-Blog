import { Profile } from "./components/Profile"
import { BlogContainer } from "./styles"

export function Blog() {
  return (
    <BlogContainer>
      <Profile followers="80" />

      {/* <Search />

      <main>
        <Post />
        <Post />
        <Post />
      </main> */}
    </BlogContainer>
  )
}
