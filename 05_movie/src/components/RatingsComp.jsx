export function RatingsComp(props) {
    return (
        <>
            <div className="filmWrap">
                <div className="filmCrit">{props.Source}</div>
                <div className="filmRatings">{props.Valuse}</div>
            </div>
        </>
    );
}
