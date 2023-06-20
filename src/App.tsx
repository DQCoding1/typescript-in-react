import './App.css'
import Container from './components/Container'
import Heading from './components/Heading'
import HeadingWithChildren from './components/HeadingWithChildren'

function App() {
  
  return (
    <main>
      <Heading title="Typescript in React"/>
      <HeadingWithChildren>
        <p>Heading with children</p>
      </HeadingWithChildren>
      <Container>
        <p>container</p>
      </Container>
    </main>
  )
}

export default App
