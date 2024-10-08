import { Routes, Route } from "react-router-dom"
import { DefaultLayout } from "./Layouts/DefaultLayouts"
import { Blog } from "./pages/Blog"
import { PostContent } from "./pages/Post"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post/:id" element={<PostContent />} />
      </Route>
    </Routes>
  )
}
