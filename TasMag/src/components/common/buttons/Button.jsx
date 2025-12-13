import "./button.scss"

export default function Button(content){
    return (
        <div className={"btn "+content.width+" "+content.margin}>
            <button type="button">{content.content}</button>
        </div>
    )
}