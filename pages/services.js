import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link"

export default function Services() {
    return (
        <>
            <Header />
            <div className="container service-div">
                <h1>Sound Design</h1>
                <p>We have Pro Producers who can amuse you to your ear expectation.</p>
                <ul>
                    <li>Sound Analysis</li>
                    <li>Electric Piano</li>
                    <li>Live Guitar</li>
                    <li>Traditional Sounds</li>
                </ul>
                <Link href="/">
                    <a><button className="btn btn-success">Download</button></a>
                </Link>
            </div>
            
            <div className="container service-div">
                <h1>Beats / Instrumentals</h1>
                <p>We do the following beat arrangements</p>
                <ul>
                    <li>Trap Beats</li>
                    <li>Gospel and Spiritual Instrumentation</li>
                    <li>Orcestration</li>
                    <li>Jazz Arrangements</li>
                    <li>Traditional / African Beats</li>
                    <li>Blues and Country</li>
                </ul>
                
                <div>
                    <Link href="/">
                        <a><button className="btn btn-success">WhatsApp</button></a>
                    </Link>
                    <Link href="/">
                        <a><button className="btn btn-primary">Facebook</button></a>
                    </Link>
                </div>
            </div>
            
            <Footer />
        </>
    )
}