// component
import BannerLook from '../Components/MyProductHeader/BannerLook'
import PersonalInfoLook from '../Components/MyProductHeader/PersonalInfoLook'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'
import UnloginNav from '../Components/UI/UnLoginNavbar'
import MyProductLook from '../../Home/Pages/MyProduct/MyProductLook'

const MyProductHeader = () => {

  return (
    <>
      {localStorage.getItem('auth') == 'true' ? <LoginNav /> : <UnloginNav />}
      <BannerLook />
      <PersonalInfoLook />
      <MyProductLook />
    </>
  )
}

export default MyProductHeader