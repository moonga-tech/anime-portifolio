import Style from "../components/layout.module.css"

export default function Layout({children}) {
    return <div className={Style.container}>{children}</div>
}