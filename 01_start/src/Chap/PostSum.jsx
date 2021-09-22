import { Post } from './Post';

export function PostSum(props) {
    return (
        <div>
            {props.postsData.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    name={post.name}
                    callB={props.callB}
                    removePost={props.removePost}
                />
            ))}
        </div>
    );
}
