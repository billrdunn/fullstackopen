
const Weather = ({ data }) => {
    
    return (
        <div>
            <h3>Weather</h3>
            <ul>
                <li>temp: {data.visibility}</li>
            </ul>
        </div>
    )
}

export default Weather