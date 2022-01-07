
const Country = ({ country }) => {

    return (
        <div>
            <h3>Basic Info</h3>
            <ul>
                <li>Name: {country.name.common}</li>
                <li>Capital: {country.capital}</li>
                <li>Population: {country.population}</li>
            </ul>
            <img src={country.flags.png} />
        </div>
    )
}

export default Country