import { Outlet } from 'react-router';
import BottomNav from './BottomNav';

/** Shell for authenticated screens: page content + bottom navigation. */
const AppLayout = () => (
  <div className="app-shell">
    <main className="app-shell__main">
      <Outlet />
    </main>
    <BottomNav />
  </div>
);

export default AppLayout;
