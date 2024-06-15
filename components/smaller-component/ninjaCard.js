import Image from "next/image";

const NinjaCard = ({ name, justu, rank, description, img}) => {
    return (
        <>
            <div className="card" style={{width: "18rem", height: "20rem", backgroundColor: "transparent", margin: ".6em", borderRadius: "1em"}}>
                <div>
                    {/* {img} */}
                </div>
                <div className="card-body text-center">
                    <h3>{name}</h3>
                    <h5 className="alert-success">{justu}</h5>
                    <p><samp> Rank: {rank}</samp></p>
                    <p className="text-warning">{description}</p>
                </div>
            </div>
        </>
    )    
}

export default NinjaCard;