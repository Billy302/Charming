import React from 'react'
import { useLocation } from 'react-router-dom'
import style from './AsideProductLIst.module.css'
function AsideProductLIst() {
  const location = useLocation()

  let newPath = []
  const searchParams = new URLSearchParams(location.search)
  let type = searchParams.get('typeID') ? searchParams.get('typeID') : ''
  let current = searchParams.get('page') ? searchParams.get('page') : '1'

  if (type) {
    newPath.push(
      <aside className={style.AsideProduct}>
        <a
          href={`${
            location.pathname + location.search.replace(`&typeID=${type}`, ``)
          }`}
        >
          總覽
        </a>

        <a
          href={`${
            location.pathname +
            location.search.replace(`typeID=${type}`, `typeID=101`)
          }`}
        >
          NFT
        </a>
        <a
          href={`${
            location.pathname +
            location.search.replace(`typeID=${type}`, `typeID=102`)
          }`}
        >
          UI/UX
        </a>
        <a
          href={`${
            location.pathname +
            location.search.replace(`typeID=${type}`, `typeID=103`)
          }`}
        >
          書籍/翻譯
        </a>
        <a
          href={`${
            location.pathname +
            location.search.replace(`typeID=${type}`, `typeID=104`)
          }`}
        >
          Logo
        </a>
        <a
          href={`${
            location.pathname +
            location.search.replace(`typeID=${type}`, `typeID=105`)
          }`}
        >
          插圖
        </a>
      </aside>
    )
  } else {
    newPath.push(
      <aside className={style.AsideProduct}>
        <a href={`${location.pathname + location.search}`}>總覽</a>
        <a href={`${location.pathname + location.search}&typeID=101`}>NFT</a>
        <a href={`${location.pathname + location.search}&typeID=102`}>UI/UX</a>
        <a href={`${location.pathname + location.search}&typeID=103`}>
          書籍/翻譯
        </a>
        <a href={`${location.pathname + location.search}&typeID=104`}>Logo</a>
        <a href={`${location.pathname + location.search}&typeID=105`}>插圖</a>
      </aside>
    )
  }

  return <>{newPath}</>
}

export default AsideProductLIst
