// component
import Banner from '../Components/MyProductHeader/Banner'
import PersonalInfo from '../Components/MyProductHeader/PersonalInfo'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'
import MyProductLook from '../../Home/Pages/MyProduct/MyProductLook'

const MyProductHeader = () => {
  let now = localStorage.getItem('auth')
  return (
    <>
      <LoginNav />
      <Banner />
      <PersonalInfo />
      <MyProductLook />
    </>
  )
}

export default MyProductHeader