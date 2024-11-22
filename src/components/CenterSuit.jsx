

const CenterSuit = ({ suit }) => {
    return (
        <div className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[33%]`}>
            <img src={suit} className={`w-full`} />
        </div>
    );
}

export default CenterSuit;