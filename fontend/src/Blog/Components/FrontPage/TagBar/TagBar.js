import PillBtn from '../../UI/PillBtn';
import classes from './TagBar.module.css';
import { Link } from 'react-router-dom';

const TagBar = (props) => {
    // TagBar component 用來 render 最上面的tags
    const news = '最新消息';
    const design = '設計';
    const interview = '專訪';
    const exhibition = '展覽';
    const tech = '科技';
    const info = '知識';
    const op = '心得';
    const share = '分享';
    return (
        <div className={classes.tagbar}>
            <p className={`${classes['tagbar--title']} ${props.isDarkMode ? classes['active--title'] : ''}`}>
                熱門標籤話題：
            </p>

            <PillBtn desc={news}>
                <Link to="/blog/search/1">#最新消息</Link>
            </PillBtn>

            <PillBtn desc={design}>
                <Link to="/blog/search/2">#設計</Link>
            </PillBtn>

            <PillBtn desc={interview}>
                <Link to="/blog/search/3">#專訪</Link>
            </PillBtn>

            <PillBtn desc={exhibition}>
                <Link to="/blog/search/4">#展覽</Link>
            </PillBtn>

            <PillBtn desc={tech}>
                <Link to="/blog/search/5">#科技</Link>
            </PillBtn>

            <PillBtn desc={info}>
                <Link to="/blog/search/6">#知識</Link>
            </PillBtn>

            <PillBtn desc={op}>
                <Link to="/blog/search/7">#心得</Link>
            </PillBtn>

            <PillBtn desc={share}>
                <Link to="/blog/search/8">#分享</Link>
            </PillBtn>

            {/* {props.tagsName.map((tag) => (
                <PillBtn
                    key={tag.id}
                    className={`${classes['tagbar--pill-btn']} ${props.isDarkMode ? classes['active--btn'] : ''}`}
                >
                    {tag.tags}
                </PillBtn>
            ))} */}
        </div>
    );
};

export default TagBar;
