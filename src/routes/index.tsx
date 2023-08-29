import { Routes, Route } from "react-router-dom"
import { PageHome, PageContato, PageLayout, PagePresenca } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/contato" element={<PageContato />} />
        <Route path="/presenca" element={<PagePresenca />}></Route>
      </Route>
    </Routes>
  )
}
