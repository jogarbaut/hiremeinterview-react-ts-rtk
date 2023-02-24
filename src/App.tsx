import { useState } from 'react'
import Navbar from '@/components/navbar'
import { SelectedPage } from '@/components/shared/types'
import Home from '@/pages/home'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import QuestionSetCard from './components/questionSet/QuestionSetCard'
QuestionSetCard

function App() {
  const questionSets = useSelector(
    (state:RootState) => state.questionSets.value
  )

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div className="app">
      {/* <Navbar
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      /> */}
      {
        questionSets.map(questionSet => {
          return <QuestionSetCard questionSet={questionSet} />
        })
      }
    </div>
  )
}

export default App
