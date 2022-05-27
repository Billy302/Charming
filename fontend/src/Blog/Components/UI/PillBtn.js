import classes from './PillBtn.module.css';

const PillBtn = (props) => {
    return (
        // 藥丸形按鈕
        <button
            onClick={props.onClick}
            className={`${props.className} ${classes.pillbtn} ${props.isDarkMode ? classes['dark-mode--btn'] : ''}`}
        >
            {props.children}
        </button>
    );
};
export default PillBtn;
