const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.handleSearch(e)}
        name="Search"
        placeholder="Try 'Frozen 2'..."
        type="text"
      />
    </form>
  )
}

export default Search