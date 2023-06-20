import './App.css'
import Heading from './components/Heading'
import HeadingWithChildren from './components/HeadingWithChildren'

function App() {
  
  return (
    <main>
      <Heading title="Typescript in React"/>
      <HeadingWithChildren>
        <p>Heading with children</p>
      </HeadingWithChildren>
    </main>
  )
}

export default App
