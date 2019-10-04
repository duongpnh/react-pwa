import React, {Component, lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import './index.scss';
import LazyLoad from 'react-lazy-load';
import { getPosts } from '../../../actions/posts';
import { Link } from 'react-router-dom';


const ImageLoader = lazy(() => import('../../functional/ImageLoader'));
const RemainPostDashboard = lazy(() => import('./items'));

class Dashboard extends Component {

    render() {
        const { newestPosts } = this.props;
        if (newestPosts && newestPosts.length > 0) {
            const remainPost = newestPosts.filter(p => p._id !== newestPosts[0]._id);
            return (
                <div className="wrapper">
                    <section className="d-head-container">
                        <h1>Welcome to Anonymous Blog</h1>
                        <button className="d-hire-me">Hire me</button>
                    </section>
                    <section className="d-top-container">
                        <header className="showcase">
                            <div className="poster">
                                <Suspense fallback={<div>Loading...</div>}>
                                <LazyLoad>
                                    <ImageLoader src={newestPosts && newestPosts[0].image}/>
                                </LazyLoad>
                                </Suspense>
                            </div>
                            <div className="details">
                                <h1>
                                    {newestPosts && newestPosts[0].title}
                                </h1>
                                <p>{newestPosts && newestPosts[0].description}</p>
                                <Link 
                                    aria-label="Details Post" 
                                    to={`/categories/${newestPosts[0].category_id}/posts/${newestPosts[0]._id}/details`} 
                                    className="btn"
                                >
                                    Read More
                                </Link>
                            </div>
                        </header>
                        <div className="d-top-box">
                            <Suspense fallback={<div>Loading...</div>}>
                                <RemainPostDashboard remainPost={remainPost} />
                            </Suspense>
                        </div>
                    </section>
                </div>
            )
        }
        return null;
    }

    componentDidMount() {
        if (!this.props.newestPosts || this.props.newestPosts.length === 0) {
            this.props.getNewestPosts();
        }
    }
}

const mapStateToProps = state => {
    return {
        // Due to getNewPosts so categoryId === null
        newestPosts: !state.posts.data.categoryId ? state.posts.data.data : []
    }
}

const mapDispatchToProps = dispatch => ({
    getNewestPosts: () => dispatch(getPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);