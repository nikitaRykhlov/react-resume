import React from "react";
import '@fortawesome/free-regular-svg-icons'
import "../assets/styles/Blog.scss"
import LogoDev from "@mui/icons-material/LogoDev";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMedium} from "@fortawesome/free-brands-svg-icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

function Blog() {
    return (
        <div className="container" id="blog">
            <div className="items-container blog-container">
                <h2>Blog</h2>
                <p>
                    I enjoy sharing knowledge and best practices, which is why I actively maintain and develop a
                    technical blog. It serves as a platform to document insights, explore new technologies, and
                    contribute to the developer community.
                </p>

                <div className="blog-links">
                    <a href="https://dev.to/nikita_rykhlov" target="_blank" rel="noreferrer">
                        <LogoDev className="blog-icon"/>
                    </a>
                    <a href="https://medium.com/@nikita_rykhlov" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="blog-icon" icon={faMedium}/>
                    </a>
                    <a href="https://www.facebook.com/groups/nikitarykhlov" target="_blank" rel="noreferrer">
                        <FacebookIcon className="blog-icon"/>
                    </a>
                    <a href="http://t.me/nikitaRykhlovBlog" target="_blank" rel="noreferrer">
                        <TelegramIcon className="blog-icon"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Blog;