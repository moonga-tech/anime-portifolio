import Layout from "../components/layout"
import Link from "next/link"
import IndexContent from "../components/pages-content/indexContent"
import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Index() {
    return (
        <>
            <Head>
                <title>Naruto World | Home</title>
            </Head>

            <Layout>
                <Header />
                <IndexContent />
                <Footer />
            </Layout>
        </>
    )
}