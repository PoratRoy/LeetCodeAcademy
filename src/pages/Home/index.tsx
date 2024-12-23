import React from 'react'
import QuestionList from '../../components/QuestionList'
import './Home.css'
import { Questions } from '../../models/resources/questions'

const Home: React.FC = () => {
  return (
    <main className="main-container">
      <div className="content-wrapper">
        <h1 className="app-title">LeetCodeAcademy</h1>
        <QuestionList questions={Questions} />
      </div>
    </main>
  )
}

export default Home