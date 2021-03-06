import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas', number: '040-123456'
    },
    {
      name: 'Hello', number: '123123123'
    },
    {
      name: 'Hello2', number: '123123123'
    }
  ])
  const [textField, setTextField] = useState('input name')
  const [newNumber, setNewNumber] = useState('input number')
  const [filterText, setFilterText] = useState('')

  const filterArray = () => {
    if (filterText === "")
      return persons

    const filterObj = persons.filter(
      person => person.name.toLowerCase().includes(filterText.toLowerCase())
    )
    return filterObj
  }

  const renderArray = (arrays) => {
    return arrays.map(person => <div>{person.name + ' ' + person.number}</div>)
  }

  const addPerson = (event) => {
    event.preventDefault();

    const personObj = {
      name: textField,
      number: newNumber,
    }

    console.log(personObj)

    setPersons(persons.concat(personObj))
    setTextField('')
    setNewNumber('')

  }

  const containsPerson = () => {
    let b = false
    persons.forEach(person => {
      if (person.name === textField)
        b = true
    })
    return b
  }

  const handlerText = (event) => {
    setTextField(event.target.value)
  }

  const handlerNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handlerFilter = (event) => {
    setFilterText(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input value={filterText} onChange={handlerFilter} />
        </div>
      </form>

      <h2>Add a new Contact</h2>
      <form onSubmit={containsPerson() ? console.log(textField + ' is in the phonebook') : addPerson}>
        <div>
          name: <input value={textField} onChange={handlerText} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlerNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {renderArray(filterArray())}
      </div>
    </div>
  )
}

export default App