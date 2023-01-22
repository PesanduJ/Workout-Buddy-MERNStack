import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm = () => {

    const {dispatch} = useWorkoutsContext()     //use this to work with hooks

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])      //validation

    const handleSubmit = async (e) => {
        e.preventDefault()       //preventing the default actions of form being submitting, normally it would be refreshing the page

        const workout = { title, load, reps }

        const response = await fetch('/api/workouts/', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('New workout added!', json)

            dispatch({type: 'CREATE_WORKOUT', payload: json})               //use this to work with hooks

        }

    }

    return (
        <form className="create" onSubmit={handleSubmit}>

            <h3>Add a New Workout</h3>

            <label>Excersize Title :</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}            //validation for making text field outine red using css
            />

            <label>Load (Kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? 'error' : ''}            //validation for making text field outine red using css
            />

            <label>Reps :</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? 'error' : ''}            //validation for making text field outine red using css
            />

            <button>Add Workout</button>

            {error &&
                <div className="error">
                    {error}
                </div>}

        </form>
    )
}

export default WorkoutForm