import { Routes, Route } from "react-router-dom"
import { PageHome, PageContato, PageLayout, PagePresenca, PageCadastro, PageCheckin } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="/contato" element={<PageContato />} />
        <Route path="/presenca" element={<PagePresenca />}></Route>
        <Route path="/cadastro" element={<PageCadastro />}></Route>
        <Route path="/checkin" element={<PageCheckin />}></Route>
      </Route>
    </Routes>
  )
}
