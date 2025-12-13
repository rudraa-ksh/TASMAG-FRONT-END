import "./rounded.scss"

export default function Rounded(icon){
    return (
        <div className="round-outer">
            <span class="material-symbols-outlined">{icon.name}</span>
        </div>
    )
}