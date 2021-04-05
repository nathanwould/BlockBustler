const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.handleSearch(e)}
        name="Search"
        placeholder="Search"
        type="text"
      />
    </form>
  )
}

export default Search