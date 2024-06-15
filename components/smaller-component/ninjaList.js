import NinjaCard from "./ninjaCard";

export default function NinjaList({ ninja }) {
    
    return (
        <div className="card-div">
            {
                ninja.map((p, i) => {
                    return (
                        <NinjaCard key={i} name={ ninja[i].name} justu={ ninja[i].justu } rank={ ninja[i].rank }  description={ninja[i].description}  /* img={ninja[i].img} *//>
                    )
                })
            }
        </div>
    )
}
