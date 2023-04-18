import { Link } from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div className="item_section">
            <h3>{props.title}</h3>
            <img src={props.image} alt="" />
            <div>
                <Link to={`/${props.id} `} state={props.allNews}>Read more</Link>
            </div>
        </div>
    );
}

export default NewsItem;