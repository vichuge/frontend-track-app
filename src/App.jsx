import { HashRouter, Navigate, Route, Routes } from 'react-router';
import AppLayout from './components/AppLayout';
import { RedirectIfAuthenticated, RequireAuth } from './components/RouteGuards';
import AddRecordPage from './pages/AddRecordPage';
import DrinksPage from './pages/DrinksPage';
import LoginPage from './pages/LoginPage';
import RecordsPage from './pages/RecordsPage';
import SignUpPage from './pages/SignUpPage';

/**
 * Routes. HashRouter keeps deep links working on GitHub Pages
 * (static hosting with no server-side rewrites).
 */
export const AppRoutes = () => (
  <Routes>
    <Route element={<RedirectIfAuthenticated />}>
      <Route index element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Route>
    <Route element={<RequireAuth />}>
      <Route element={<AppLayout />}>
        <Route path="list" element={<DrinksPage />} />
        <Route path="form/:id" element={<AddRecordPage />} />
        <Route path="records" element={<RecordsPage />} />
      </Route>
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

const App = () => (
  <HashRouter>
    <AppRoutes />
  </HashRouter>
);

export default App;
