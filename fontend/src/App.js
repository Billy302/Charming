import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

//component
// import PhoneFooter from './Home/Components/PhoneFooter/PhoneFooter';

//首頁
// import LoginHome from './Home/Pages/loginHome/LoginHome';
// import LoginHome from './Home/Pages/LoginHome/LoginHome';
// import UnloginHome from './Home/Pages/UnloginHome/UnloginHome';
// import MyProduct from './Home/Pages/MyProduct/MyProduct';

// 部落格
import Blog from './Blog/Components/Page/Blog';
import Article from './Blog/Components/Page/Article';
import Search from './Blog/Components/Page/Search';

function App() {
    return (
        <div>
            <Routes>
                {/* --------首頁------- */}
                {/* <Route path="/LoginHome" element={<LoginHome />} />
                <Route path="/UnloginHome" element={<UnloginHome />} />
                <Route path="/Login" element={<LoginHome />} />
                <Route path="/LoginHome" element={<LoginHome />} />
                <Route path="/MyProduct" element={<MyProduct />} />
                <Route path="/" element={<UnloginHome />} /> */}

                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/article/:id" element={<Article />} />
                <Route path="/blog/search/:desc" element={<Search />} />
                {/* <Route path="/blog" element={<Footer />} /> */}
            </Routes>
            {/* <Footer />
            <PhoneFooter /> */}
        </div>
    );
}

export default App;
