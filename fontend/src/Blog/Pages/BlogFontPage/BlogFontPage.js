import NavBar from '../../Components/FrontPage/NavBar/TagBar';
import Slider from '../../Components/FrontPage/Slider/Slider';
import TrendingArticle from '../../Components/FrontPage/TrendingArticle/TrendingArticle';
import SelectedArticle from '../../Components/FrontPage/SelectedArticle/SelectedArticel';

const BlogFontPage = () => {
    return (
        <>
            <NavBar />
            <Slider />
            <TrendingArticle />
            <SelectedArticle />
        </>
    );
};

export default BlogFontPage;
