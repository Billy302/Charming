import { AiFillPropertySafety } from 'react-icons/ai';
import { FaFacebookSquare, FaLine, FaTwitterSquare } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import classes from './ArticleShare.module.css';
import { FacebookShareButton, LineShareButton, TwitterShareButton, EmailShareButton } from 'react-share';

const ArticleShare = (props) => {
    const shareUrl = 'http://localhost:3000';
    return (
        <div className={`${classes['article--share']} ${props.className}`}>
            <FacebookShareButton url={shareUrl}>
                <FaFacebookSquare className={`${classes['article--share__icon']} ${classes['facebook-icon']}`} />
            </FacebookShareButton>
            <LineShareButton url={shareUrl}>
                <FaLine className={`${classes['article--share__icon']} ${classes['line-icon']}`} />
            </LineShareButton>
            <EmailShareButton>
                <ImMail className={`${classes['article--share__icon']} ${classes['mail-icon']}`} />
            </EmailShareButton>
            <TwitterShareButton url={shareUrl}>
                <FaTwitterSquare className={`${classes['article--share__icon']} ${classes['twitter-icon']}`} />
            </TwitterShareButton>
        </div>
    );
};

export default ArticleShare;
