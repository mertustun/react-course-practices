import { useState } from 'react'

function InputExample() {
    // There is more than one way to process the value of input!
    // 1st
    /*const [name, setName] = useState('')
    const [surname, setSurnamee] = useState('')

     const ChangeName = (e) => setName(e.target.value)
    // console.log('Name: ', name);  CONSOLE TEST
    const ChangeSurname = (inp) => setSurnamee(inp.target.value)
    // console.log('Surname: ', surname); CONSOLE TEST
    */
    // 2nd This way is more useful and efficient
    const [form, setForm] = useState({ name: '', surname: '' })
    const changeInput = (event) => {
        // console.log(`${event.target.name} : ${event.target.value}`); CONSOLE TEST!!
        setForm({...form, [event.target.name]: event.target.value})
    }
    return (
        <div>
            <label htmlFor="name">Name</label>
            <input id='name' name='name' onChange={changeInput} />
            {/* Name prop is used for achivnig from useState's form method. in that way, event.target.name
                method is determine which input is changing or anytihng and the way of e.target.value
                take the value in input and process it!!!
            */}
            <br />
            <br />
            <hr />
            <label htmlFor="surname">Surname</label>
            <input id='surname' name='surname' onChange={changeInput} />
            <br />
            <br />
            <hr />
            <h3>
                {form.name} <br />
                {form.surname}
            </h3>
        </div>
    )
}

export default InputExample
