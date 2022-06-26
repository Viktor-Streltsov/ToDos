const InputFeld = ({text, hendlInput, handlSubmit}) => {
    return (
        <label>
            <input value={text} onChange={(e) => hendlInput(e.target.value)} />
            <button onClick={handlSubmit}>Add Todo</button>
        </label>
  )
}

export default InputFeld