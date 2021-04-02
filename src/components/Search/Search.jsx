import './Search.css';

function Search(props) {
  let { searchTerm, setSearchTerm, setFilteredMessages, messages } = props;

  function handleChange(event) {
    setSearchTerm(event.target.value);
    setFilteredMessages(
      messages.filter((message) => {
        return message.fields.message
          .toLowerCase()
          .replace(/ /g, "")
          .includes(searchTerm.replace(/ /g, ""))
      })
    )
  };

  return (
    <div className='search-comp'>
      <label htmlFor='search'>Search</label>
      <input
        type='text'
        name='search'
        id='search'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search;
