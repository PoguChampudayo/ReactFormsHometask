import React, { useState } from 'react'

export const InputForm = ({addTraining, addDistance}) => {

    const [training, setTraining] = useState({id: null, date:'', km:''})

    const onChange = (event) => {
        const { name, value } = event.target;
        setTraining({ ...training, [name]: value });
    };


    const onSubmit = (evt) => {
        evt.preventDefault()
        if (!training.date || !training.distance){
        addTraining(training);
        addDistance(training);
        }
    }

  return (
    <form onSubmit={onSubmit}>
            <div className="title">
                <span className="title-date">Дата (ДД.ММ.ГГ)</span>
                <span className="title-km">Пройдено км</span>
            </div>
            <input className='date-input'
                type="text"
                name="date"
                onChange={onChange}
            />
            <input className='km-input'
                type="text"
                name="km"
                onChange={onChange}
            />
            <button>OK</button>
        </form>
  )
}
