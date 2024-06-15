import Link from "next/link"

export default function Footer() {
    return (
        <div>
            <hr />
            <footer className="text-center">
                <section className="footer-div container">
                <div className="contact">
                    <h4>like what you have seen!!</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, corrupti!</p>
                    <div><Link href="/"><a className="text-decoration-none text-info">Contact us</a></Link></div>
                </div>
                <div>
                    <h4>Related articles</h4>
                    <ol>
                        <li><Link href="/"><a>Anime manga</a></Link></li>
                        <li><Link href="/"><a>Anime manga</a></Link></li>
                        <li><Link href="/"><a>Anime manga</a></Link></li>
                    </ol>
                </div>
                <div>
                    <h4>like what you have seen!!</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, corrupti!</p>
                </div>
                <div>
                    <h4>like what you have seen!!</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, corrupti!</p>
                </div>
                </section>
                <p>&copy; 2022 Naruto World All rights reserved.</p>
            </footer>
        </div>  
    )
}