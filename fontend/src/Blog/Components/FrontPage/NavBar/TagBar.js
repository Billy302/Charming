import PillBtn from '../../UI/PillBtn';
import classes from './TagBar.module.css';

const TagBar = (props) => {
    // TagBar component 用來 render 最上面的tags
    return (
        <div className={classes.tagbar}>
            <p>熱門標籤話題：</p>
            {props.tagsName.map((tag) => (
                <PillBtn key={tag.id} className={classes['tagbar--pill-btn']}>
                    {tag.tags}
                </PillBtn>
            ))}
        </div>
    );
};

export default TagBar;
