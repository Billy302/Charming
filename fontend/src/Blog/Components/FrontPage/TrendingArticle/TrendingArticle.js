import Trending from './Trending';
import classes from './TrendingArticle.module.css';
import article1 from './img/article1.jpg';
import article2 from './img/article2.jpg';
import article3 from './img/article3.jpg';
import article4 from './img/article4.jpg';
import article5 from './img/article5.jpg';

const TrendingArticle = () => {
    const articleData = [
        {
            img: article1,
            title: '刺青，以及刺青教會我的',
            context:
                '老舊的想法已經過時了。我們要從本質思考，從根本解決問題。你會想到什麼呢？說到刺青，你會想到什麼呢？老舊的想法已經過時了。我們要從本質思考，從根本解決問題。你會想到什麼呢？說到刺青，你會想到什麼呢？',
            id: Math.random(),
        },
        {
            img: article2,
            title: '從躲躲藏藏，到正大光明，我的街頭塗鴉故事',
            context:
                '若能夠洞悉街頭各種層面的含義，勢必能讓思維再提高一個層級。若能夠洞悉街頭各種層面的含義，勢必能讓思維再提高一個層級。若能夠洞悉街頭各種層面的含義，勢必能讓思維再提高一個層級。',
            id: Math.random(),
        },
        {
            img: article3,
            title: '五條悟，來自日本，闖蕩台北街頭十年的故事',
            context:
                '培根曾說過一句意義深遠的話，一個人越啜飲世故的烈酒，就越沉醉於世故之中。希望大家能從這段話中有所收穫。若能夠洞悉藝人各種層面的含義，勢必能讓思維再提高一個層級。',
            id: Math.random(),
        },
        {
            img: article4,
            title: '電影從業人員，光鮮亮麗的背後',
            context:
                '培根曾說過一句意義深遠的話，一個人越啜飲世故的烈酒，就越沉醉於世故之中。希望大家能從這段話中有所收穫。若能夠洞悉藝人各種層面的含義，勢必能讓思維再提高一個層級。',
            id: Math.random(),
        },
        {
            img: article5,
            title: '旋渦鳴人，從最後一名轉職成為軟體工程師的故事',
            context:
                '培根曾說過一句意義深遠的話，一個人越啜飲世故的烈酒，就越沉醉於世故之中。希望大家能從這段話中有所收穫。若能夠洞悉藝人各種層面的含義，勢必能讓思維再提高一個層級。',
            id: Math.random(),
        },
    ];

    return (
        <>
            <h2 className={classes['trending-title']}>本週熱門文章</h2>
            <Trending article={articleData} />
        </>
    );
};

export default TrendingArticle;
