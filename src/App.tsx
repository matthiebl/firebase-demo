import { BrowserRouter, Route, Routes } from 'react-router-dom'

import WelcomePage from './pages/Welcome'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<WelcomePage />} />
        </Routes>
    </BrowserRouter>
)

export default App
