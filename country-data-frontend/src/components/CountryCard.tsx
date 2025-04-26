export default function CountryCard({ country }: { country: any }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            {country.flag ? (
                <img
                    className="w-10 h-10 object-cover"
                    src={country.flag}
                    alt={`Flag of ${country.name}`}
                />
            ) : (
                <p>No flag available</p>
            )}
            <div className="mt-2 text-center">
                <h2>{country.name}</h2>
                <p>Region: {country.region}</p>
            </div>
        </div>
    );
}