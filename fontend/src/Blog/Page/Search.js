import ArticleList from '../Components/ArticleList/ArticleList'
import UnloginNav from '../Components/UI/UnLoginNavbar'
import Footer from '../Components/UI/Footer'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoginNav from '../Components/SearchBar/SearchBar'

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
      <LoginNav />
      <ArticleList article={fetchData} />
    </>
  )
}

export default Search
