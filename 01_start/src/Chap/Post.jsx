export function Post(props) {
    const { id, name, callB, removePost } = props;

    return (
        <span>
            <h2 onClick={callB}>{name}</h2>
            <button onClick={() => removePost(id)}>delete</button>
        </span>
    );
}
