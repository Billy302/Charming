import BlogSearch from '../Components/BolgSearch/BlogSearch'
import SearchBar from '../Components/SearchBar/SearchBar'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'
import UnloginNav from '../../Home/Components/UnloginNav/UnloginNav'

const ArticleSearch = () => {
  return (
    <>
      {localStorage.getItem('auth') == 'true' ? <LoginNav /> : <UnloginNav />}
      <BlogSearch />
    </>
  )
}

export default ArticleSearch
