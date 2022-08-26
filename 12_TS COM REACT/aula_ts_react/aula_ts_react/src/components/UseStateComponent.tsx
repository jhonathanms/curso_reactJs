import React, {useState, ChangeEvent} from 'react'

const UseStateComponent = () => {
    const [text, setText] = useState<string>("");

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        console.log(text);
    }

  return (
      <div>
          <h1>Trabalhando com UseState em TS e React</h1>
          <input type="text" onChange={handlerChange} value={text} />
      </div>
  )
}

export default UseStateComponent