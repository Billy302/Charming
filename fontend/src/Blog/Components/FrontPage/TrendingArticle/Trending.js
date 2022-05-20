import classes from './Trending.module.css';

const Trending = (props) => {
    const allData = props.article;

    return allData.map((data) => {
        return (
            <div key={data.id} className={classes['trending-article']}>
                <img src={data.img} alt=""></img>
                <div className={classes['trending-article--context']}>
                    <h2 className={props.isDarkMode ? classes['active-title'] : ''}>{data.title}</h2>
                    <p>{data.context}</p>
                </div>
            </div>
        );
    });
};

export default Trending;
