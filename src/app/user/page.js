'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleTheme, setInputValue } from "@/lib/features/themeSlice";
import React from 'react'
import Link from "next/link";

const page = () => {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);
  const inputValue = useAppSelector((state) => state.theme.inputValue);
  const data = useAppSelector((state) => state.user.userArray);
  const dispatch = useAppDispatch();

  console.log(data);

  return (
    <>
      <div>{currentTheme}</div>
      <button onClick={() => dispatch(toggleTheme())}>
        Update theme color
      </button>
      <h2>Giá trị: {inputValue}</h2>
      <input value={inputValue} onChange={(e) => dispatch(setInputValue(e.target.value))}></input>
      <Link href='/table'>Đi table</Link>
      <Link href='/data'>Đi data</Link>
    </>
  )
}

export default page
