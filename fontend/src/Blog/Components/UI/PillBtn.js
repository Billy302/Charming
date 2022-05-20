import classes from './PillBtn.module.css';

const PillBtn = (props) => {
    return (
        <button onClick={props.onClick} className={`${props.className} ${classes.pillbtn}`}>
            {props.children}
        </button>
    );
};
export default PillBtn;
