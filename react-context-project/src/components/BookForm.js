import { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
  const { dispatch } = useContext(BookContext)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_BOOK',
      book: {
        title: title,
        author: author,
      },
    })
    setTitle('')
    setAuthor('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        placeholder='Book Title'
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type='text'
        value={author}
        placeholder='Book Author'
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <input
        type='submit'
        value='addBook'
      />
    </form>
  )
}

export default BookForm
