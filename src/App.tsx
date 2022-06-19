import { Routes, Route } from 'react-router-dom'
import { Home, SignInAdapter } from './pages'

export const App = () => (
    <div data-test="app">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignInAdapter />} />
        </Routes>
    </div>
)
