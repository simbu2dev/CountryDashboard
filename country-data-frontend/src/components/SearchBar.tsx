
export default function SearchBar({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (term: string) => void }) {
    return (
        <div className="mb-4">
            <label className="block text-gray-700">
                Search for a Country
            </label>
            <input
                id="search"
                type="text"
                placeholder="Enter country name"
                className="border border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}