import { Routes, Route } from 'react-router-dom'
import { Home, SignIn } from './pages'

export const App = () => (
    <div data-test="app">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    </div>
)
