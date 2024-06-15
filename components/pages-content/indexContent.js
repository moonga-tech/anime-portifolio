import { ninjas } from "../smaller-component/ninjas"
import NinjaList from "../smaller-component/ninjaList"
import Image from "next/dist/client/image";

export default function IndexContent() {
    /* const imgs = ["1", "2","3","4"].map((img, i) => {
        return (
            <div key={i}>
                <Image 
                    src={`/images/${img[0]}.jpg`} 
                    alt="ninjas" 
                    width={290}
                    height={250}/>
            </div>
        )
    }); */
    
    return (
        <>
            <div>
                <section className="container">
                    <h1>Lorem, ipsum dolor.</h1>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, possimus?</p>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi distinctio expedita laborum! Ducimus tempora accusamus suscipit deleniti doloremque omnis! Distinctio .</p>
                    <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                    </ul>
                </section>
                <div className="container-fluid">
                    <h1 className="text-center">Ninja Cards Description</h1>
                    <NinjaList ninja={ ninjas } />
                </div>
            </div>
        </>
    )
}