import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
    return (
        <div>
            <section className="banner">
                <div className="container">
                <Link href="/">
                    <a><h1>Naruto World</h1></a>
                </Link>
                </div>
            </section>
            <header className="container">
                <nav>
                    <ul>
                        <li>
                            <Link href="/"><a>Home</a></Link>
                        </li>
                        <li>
                            <Link href="/character"><a>Characters</a></Link>
                        </li>
                        <li>
                            <Link href="/about"><a>About Us</a></Link>
                        </li>
                    </ul>
                    <form action="" method="post">
                        <input type="search" name="search" id="search" className="form-control" placeholder="search for a character..........."/>
                        <button type="submit" className="btn btn-success">Search</button>
                    </form>
                </nav>
            </header>    
            <hr />
        </div>
    )
}