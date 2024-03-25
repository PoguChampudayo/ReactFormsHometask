import React from 'react'

export const Converter = () => {
    const onSubmit = (evt) => {
        evt.preventDefault()
        const hex = evt.target.hex
        const button = evt.target.button
        const validation = new RegExp('^#(?:[0-9a-fA-F]{6}){1,2}$')
        const rgb = []
        if (!validation.test(hex.value)) {
           button.innerText = 'Ошибка!'
            evt.target.parentElement.parentElement.style.background = 'red'
        }
        else {
            evt.target.parentElement.parentElement.style.background = hex.value
            for (let i = 1; i < 7; i += 2) {
                rgb.push(parseInt((hex.value.slice(i,i + 2)), 16));
            }
            button.innerText = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        }
        
    }
  return (
    <form className='converter' onSubmit={onSubmit}>
        <input type="text" name='hex'/>
        <button name='button'>Конвертировать</button>
    </form>
  )
}
