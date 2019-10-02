import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { getPosts } from '../../../actions/posts';
import RemainPosts from './items';
import Loading from '../../../common/Loading';


class Posts extends React.Component {

    render() {
        const {posts} = this.props;
        if (posts.data && posts.data.length > 0) {
            return (
                <div className="d-posts">
                    {
                        <RemainPosts remainPosts={posts.data}/>
                    }
                </div>
            );
        } else {
            return <Loading />
        }
    }

    componentDidMount() {
        if (!this.props.posts.data || this.props.posts.data.length === 0) {
            this.props.getPosts(this.props.match.params.cname);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.cname !== this.props.match.params.cname) {
            this.props.getPosts(this.props.match.params.cname);
        }
    }
}


const mapStateToProps = state => {
    return {
        posts: state.posts.data.categoryId ? state.posts.data : {}
    }
}

const mapDispatchToProps = dispatch => ({
    getPosts: (categoryId) => dispatch(getPosts(categoryId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);