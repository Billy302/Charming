import style from './MyProduct.module.css'
// component
import Banner from '../Components/MyProductHeader/Banner'
import PersonalInfo from '../Components/MyProductHeader/PersonalInfo'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'
import MyProduct from '../../Home/Pages/MyProduct/MyProduct'

const MyProductHeader = () => {
  let now = localStorage.getItem('auth')
  return (
    <>
      <LoginNav />
      <Banner />
      <PersonalInfo />
      <MyProduct />
    </>
  )
}

export default MyProductHeader
