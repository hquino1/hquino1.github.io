import './RatingCard.modules.css';

const RatingCard = ({name, percentage}) => {

    const style = {
        backgroundColor: '#89CFF0',
        height: '100%',
        width: `${percentage}%`,
        borderRadius: '5px'
    }

    return (
        <div className="ratingCard-container"> 
            <span style={{display: 'flex', paddingBottom: 5, paddingTop: 15, justifyContent: 'space-between'}}> 
                <h1 style={{padding: 0, margin: 0}}> {name}</h1>
                <h1 style={{padding: 0, margin: 0, left: '5px', fontWeight: 'lighter'}}>{`${percentage}%`}</h1>
            </span>

            <div className="skillBar-outline"> 
                <div style={style}> </div>
            </div>
        </div>
    );
}

export default RatingCard;
