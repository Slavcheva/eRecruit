
import "./QuickMenu.css"

export default function QuickMenu({title}) {
    return (
        <div className="quick-menu">
            <button>{title}</button>
        </div>
    )
}