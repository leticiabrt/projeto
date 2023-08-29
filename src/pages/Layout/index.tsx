import React from "react"
import { Outlet } from "react-router-dom"
import { ComponentHeader } from "../../components"
import * as S from "./styles"

export function Layout() {
  return (
    <>
      <ComponentHeader />
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  )
}
