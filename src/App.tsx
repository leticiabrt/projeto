import { ComponentFooter, ComponentHeader } from "./components";
import { PageHome, PageList } from "./pages";
import { GlobalStyle, Main } from "./styles/GlobalStyle";
import { Dispatch, SetStateAction, useState } from "react";

export interface IPage {
  setPage: Dispatch<SetStateAction<number>>
}
export function App() {
  const [page, setPage] = useState(1)
  console.log(page)
  return (
    <>
      <GlobalStyle />
      <ComponentHeader setPage={setPage} />
      <Main>
        {page == 1 ? (
          <PageHome />
        ) : (
          <PageList />
        )}
      </Main>
      <ComponentFooter />
    </>
  )
}

