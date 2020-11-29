const AddColorForm = ({addNewColor}) => {
    let title, color
    const submit = (e) => {
        e.preventDefault()
        addNewColor(title.value, color.value)
            title.value = ''
            color.value = '#000000'
            title.focus()
    }
    return (
        <form method="POST" onSubmit={submit}>
            <input type="text" ref={input => title = input} required/>
            <input type="color" ref={input => color = input} required/>
            <button>Add</button>
        </form>
    )
}
export default AddColorForm