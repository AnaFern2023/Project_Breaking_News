import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const NewsDetails = () => {

    const location = useLocation()
    console.log(location);
    return (
        <section className="section_details">
            <Link to='/'>Home</Link>
            <h3>{location.state.title}</h3>
            <img src={location.state.urlToImage} alt="pic" />
            <p>{location.state.description}</p>
            <a href={location.state.url}>Read more</a>
        </section>
    );
}

export default NewsDetails;