import { Routes, Route } from 'react-router-dom'
import { Home, SignInAdapter } from './pages'
import { ProtectedRoute } from './containers'

export const App = () => (
    <div data-test="app">
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />
            <Route path="/sign-in" element={<SignInAdapter />} />
        </Routes>
    </div>
)
