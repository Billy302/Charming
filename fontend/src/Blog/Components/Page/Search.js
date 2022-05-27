import ArticleList from '../ArticleList/ArticleList';
import UnloginNav from '../UI/UnLoginNavbar';
import Footer from '../UI/Footer';

const Search = (props) => {
    return (
        <>
            <UnloginNav />
            <ArticleList />
            <Footer />
        </>
    );
};

export default Search;
