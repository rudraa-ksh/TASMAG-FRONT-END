import "./input.scss"

export default function Input(inp){
    return (
        <>
            <label className="label">{inp.label}</label>
            <input type="text" className="input" placeholder={inp.placeholder} />
        </>
    )
}