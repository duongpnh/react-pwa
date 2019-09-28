import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const RemainPosts = (props) => {
    if (props.remainPosts) {
        return (
            <ul>
                {
                    props.remainPosts.map((post, index) => (
                        <li key={post._id}>
                            <img src={post.image} alt=""/>
                            <div className="d-posts-content-item">
                                <p>{post.title}</p>
                                <Link 
                                    arial-label="Details Post" 
                                    to={`/categories/${post.category_id}/posts/${post._id}/details`}
                                >
                                    Read more
                                </Link>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
    return null
};

export default RemainPosts;