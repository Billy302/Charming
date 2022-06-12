import style from './MyProduct.module.css'
// component
import Banner from '../Components/MyProductHeader/Banner'
import PersonalInfo from '../Components/MyProductHeader/PersonalInfo'
import UnloginNav from '../../Home/Components/UnloginNav/UnloginNav'
import LoginNav from '../../Home/Components/LoginNav/LoginNav'
import MyProduct from '../../Home/Pages/MyProduct/MyProduct'

const MyProductHeader = () => {
  let now = localStorage.getItem('auth')
  return (
    <>
      {now == 'true' ? <LoginNav /> : <UnloginNav />}
      <Banner className={style.banner} />
      <PersonalInfo />
      <MyProduct />
    </>
  )
}

export default MyProductHeader
