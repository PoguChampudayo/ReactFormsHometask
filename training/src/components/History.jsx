import React from 'react'

export const History = ({deleteTraining, trainings}) => {
  return (
    <>
        <div className="training-list-row-header">
            <span>Дата (ДД.ММ.ГГ)</span>
            <span>Пройдено км</span>
            <span>Действия</span>
        </div>
        <div className="training-list">
            {Array.isArray(trainings) && trainings.length > 0
                ? trainings.map((training) => (
                    <div className="training-list-row" key={training.id}>
                        <span>{training.date}</span>
                        <span>{training.km}</span>
                        <div>
                            <p className="button-delete"
                                onClick={() => deleteTraining(training.id)} >
                                ✘
                            </p>
                        </div>
                    </div>
                ))
                : <div>
                    <p>Список тренировок пуст</p>
                </div>
            }
        </div>
    </>
  )
}
