import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NoPage from './pages/NoPage'
import Header from './components/Layout'
import { News } from './features/news/News'
import { Past } from './features/past/Past'
import { Footer } from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="news" element={<News />} />
          <Route path="past" element={<Past />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
