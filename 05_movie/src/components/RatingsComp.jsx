export function RatingsComp(props) {
    return props.rates.map((rate, index) => {
        return <CombineDiv key={index} Source={rate.Source} Value={rate.Value} />;
    });
}

function CombineDiv(props) {
    return (
        <>
            <div className='filmWrap'>
                <div className='filmCrit'>{props.Source}</div>
                <div className='filmRatings'>{props.Value}</div>
            </div>
        </>
    );
}
