import React, { Component } from 'react';
import { PostSum } from './PostSum';

class Collection extends Component {
    state = {
        posts: [
            { id: 'abc1', name: 'JS Basics' },
            { id: 'abc2', name: 'JS Adv' },
            { id: 'abc3', name: 'JS React' },
        ],
    };
    handlerS = () => {
        console.log('setState upDate...from Collection.jsx');
    };
    removePost = (id) => {
        this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
    };
    render() {
        return (
            <div className="Collection">
                <PostSum
                    postsData={this.state.posts}
                    callB={this.handlerS}
                    removePost={this.removePost}
                />
            </div>
        );
    }
}

export default Collection;
