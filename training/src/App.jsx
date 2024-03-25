
import './App.css';
import { InputForm } from './components/InputForm';
import { History } from './components/History';
import { useState } from 'react';
import {v4} from 'uuid'

function App() {
  const [trainings, setTrainings] = useState([])

  const addTraining = (training) => {
    training.id = v4()
    setTrainings([...trainings, training].sort((a,b) => a.date > b.date ? 1:-1 ))
  }

  const deleteTraining = (id) => {
    setTrainings(trainings.filter((training) => training.id !== id))
  }

  const addDistance = (training) => {
    debugger
    const dateIndex = trainings.findIndex(({ date }) => training.date === date);
    if (dateIndex != -1)
    {const sameDate = trainings[dateIndex]
    const updatedTraining = {
      ...sameDate,
      km: Number(sameDate.km) + Number(training.km)
    }
    const updatedTrainings = [...trainings]
    updatedTrainings[dateIndex] = updatedTraining
    setTrainings(updatedTrainings)}
  }

  return (
    <div className="App">
      <InputForm addTraining={addTraining} addDistance={addDistance}/>
      <History deleteTraining={deleteTraining} trainings={trainings}/>
    </div>
  );
}

export default App;
