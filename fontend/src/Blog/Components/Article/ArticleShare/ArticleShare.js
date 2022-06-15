import { AiFillPropertySafety } from 'react-icons/ai';
import { FaFacebookSquare, FaLine, FaTwitterSquare, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { ImMail } from 'react-icons/im';
import classes from './ArticleShare.module.css';
import { FacebookShareButton, LineShareButton, TwitterShareButton } from 'react-share';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ArticleShare = (props) => {
    const [favorite, setFavorite] = useState(false);
    const params = useParams();
    const currentArticle = params.id;
    const shareUrl = `http://localhost:3000/blog/article/${currentArticle}`;
    const favoriteHandler = () => {
        setFavorite(!favorite);
    };
    return (
        <div className={`${classes['article--share']} ${props.className}`}>
            <FacebookShareButton url={shareUrl}>
                <FaFacebookSquare className={`${classes['article--share__icon']} ${classes['facebook-icon']}`} />
            </FacebookShareButton>
            <LineShareButton url={shareUrl}>
                <FaLine className={`${classes['article--share__icon']} ${classes['line-icon']}`} />
            </LineShareButton>
            <TwitterShareButton url={shareUrl}>
                <FaTwitterSquare className={`${classes['article--share__icon']} ${classes['twitter-icon']}`} />
            </TwitterShareButton>

            {/* <EmailShareButton> */}
            {/* <ImMail className={`${classes['article--share__icon']} ${classes['mail-icon']}`} /> */}
            {/* </EmailShareButton> */}
        </div>
    );
};

export default ArticleShare;
