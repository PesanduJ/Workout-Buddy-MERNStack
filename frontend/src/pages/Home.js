import { useEffect, useState } from "react"    //used to fetch data from backend
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {

    //const [workouts, setWorkouts] = useState(null)
    const {workouts, dispatch} = useWorkoutsContext()                 //use this to work with hooks

    useEffect(() =>{
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts/')            //react doesnt recognize this address without http://localhost:3000/api/workouts .so it will use proxy that we added in into package.json, as a byproduct this will remove CORS Origin Request Error
            const json = await response.json()

            if(response.ok){
                //setWorkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})       //use this to work with hooks
            }
        }

        fetchWorkouts()
    }, [])                                                            //[] is used to avoid ]

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home