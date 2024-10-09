import './TodoSearch.css'

function TodoSearch() {
    return (
        <input placegolder="Cortar cebolla" className="TodoSearch" onChange={(event) => {
            console.log(event.target.value)
        }
        }></input>
    )
}

export { TodoSearch };