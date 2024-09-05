import { PostContainer } from "./styles"

interface PostProps {
  title: string
  content: string
  date: string
}

export default function Post({ content, date, title }: PostProps) {
  return (
    <PostContainer>
      <div>
        <p>{title}</p>
        <span> {date}</span>
      </div>

      <p>{content}</p>
    </PostContainer>
  )
}
