import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import NotFound from './pages/Not_Found/NotFound'
import {Toaster} from "@/components/ui/toaster"

function App() {

  return (
    <>
    <Toaster />
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path='*' element={<NotFound />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
