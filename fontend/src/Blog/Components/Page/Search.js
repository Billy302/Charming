import ArticleList from '../ArticleList/ArticleList'
import UnloginNav from '../UI/UnLoginNavbar'
import Footer from '../UI/Footer'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const Search = (props) => {
  const params = useParams()
  const categoryId = params.category
  const [fetchData, setFetchData] = useState([])

  // const fetchData = async () => {
  //     const fetchData = await fetch(`/search/${catagoryId}`);
  //     const result = await fetchData.json();
  //     console.log(result);
  // };

  useEffect(() => {
    fetch(`http://localhost:3001/blog/search/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data)
      })
  }, [])
  return (
    <>
      <UnloginNav />
      <ArticleList article={fetchData} />
    </>
  )
}

export default Search
