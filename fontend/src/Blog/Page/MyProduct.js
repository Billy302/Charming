import Banner from '../Components/MyProductHeader/Banner'
import PersonalInfo from '../Components/MyProductHeader/PersonalInfo'
import SearchBar from '../Components/SearchBar/SearchBar'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'
import UnloginNav from '../../Home/Components/UnloginNav/UnloginNav'

const MyProductHeader = () => {
  return (
    <>
      {localStorage.getItem('auth') == 'true' ? <LoginNav /> : <UnloginNav />}
      <Banner />
      <PersonalInfo />
    </>
  )
}

export default MyProductHeader
