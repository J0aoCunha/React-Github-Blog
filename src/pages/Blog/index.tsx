import Post from "./components/Post"
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

        <Publication>
          <Post
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae
          aspernatur facere ipsum ab numquam voluptas vel. Autem iste fugit
          omnis esse adipisci recusandae? Assumenda nemo amet explicabo nobis
          doloremque."
            date="10 de outubro de 2021"
            title="Post 1"
          />
          <Post
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae
          aspernatur facere ipsum ab numquam voluptas vel. Autem iste fugit
          omnis esse adipisci recusandae? Assumenda nemo amet explicabo nobis
          doloremque."
            date="10 de outubro de 2021"
            title="Post 1"
          />
          <Post
            content="Programming languages all have built-in data structures, 
            but these often differ from one language to another. 
            This article attempts to list the built-in data structures available in JavaScript and what properties they have. 
            These can be used to build other data structures. Wherever possible, 
            comparisons with other languages are drawn."
            date="10 de outubro de 2021"
            title="testando se isso aq vai quebrar o layout"
          />
          <Post
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae
          aspernatur facere ipsum ab numquam voluptas vel. Autem iste fugit
          omnis esse adipisci recusandae? Assumenda nemo amet explicabo nobis
          doloremque."
            date="10 de outubro de 2021"
            title="Post 1"
          />
          <Post
            content="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quae
          aspernatur facere ipsum ab numquam voluptas vel. Autem iste fugit
          omnis esse adipisci recusandae? Assumenda nemo amet explicabo nobis
          doloremque."
            date="10 de outubro de 2021"
            title="Post 1"
          />
        </Publication>
      </PublicationContainer>
    </BlogContainer>
  )
}
