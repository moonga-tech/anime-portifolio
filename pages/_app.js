import "../public/styles/global.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function App({Component, PageProps}) {
    return <div className="bg-dark"><Component {...PageProps}/></div>
}