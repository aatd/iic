import { useState } from 'react'
import './FlashcardList.css'

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'What is 2 + 2?', answer: '4' },
    { id: 3, question: 'Who wrote "Faust"?', answer: 'Johann Wolfgang von Goethe' }
  ])

  const addFlashcard = () => {
    console.log('Add flashcard clicked')
    // Example: Add dummy card
    const newCard = {
      id: Date.now(),
      question: 'New question?',
      answer: 'New answer.'
    }
    setFlashcards([...flashcards, newCard])
  }

  const editFlashcard = (id:number) => {
    console.log('Edit flashcard with ID:', id)
    // You could open a modal or inline form here
  }

  const deleteFlashcard = (id:number) => {
    console.log('Delete flashcard with ID:', id)
    setFlashcards(flashcards.filter(card => card.id !== id))
  }

  return (
    <div className="flashcard-list">
      <h2>Flashcards</h2>
      <button className="add-button" onClick={addFlashcard}>➕ Add Flashcard</button>

      <ul>
        {flashcards.map(card => (
          <li key={card.id} className="flashcard">
            <div className="card-content">
              <h3>{card.question}</h3>
              <p>{card.answer}</p>
            </div>
            <div className="card-actions">
              <button className="edit-button" onClick={() => editFlashcard(card.id)}>✏️ Edit</button>
              <button className="delete-button" onClick={() => deleteFlashcard(card.id)}>🗑️ Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FlashcardList