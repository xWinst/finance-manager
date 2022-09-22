import { Suspense, useState, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header, Loader, PrivateRoute, RestrictedRoute } from 'components';
import { refresh } from 'redux/userOperations';

const Home = lazy(() => import('pages/Home/Home'));
const Expenses = lazy(() => import('pages/Expenses/Expenses'));
const Incomes = lazy(() => import('pages/Incomes/Incomes'));
const Reports = lazy(() => import('pages/Reports/Reports'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

// let render = 0;

export const App = () => {
    const [hasRefresh, setHasRefresh] = useState(false);
    const isLoading = useSelector(state => state.user.isLoading);
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const className = pathname === '/' ? 'container' : 'container-with-user';
    const bgAttachment = pathname === '/expenses' || pathname === '/incomes' ? 'fixed' : 'scroll';

    if (!hasRefresh) {
        dispatch(refresh());
        setHasRefresh(true);
    }

    return isLoading ? (
        <Loader />
    ) : (
        <div className={className} style={{ backgroundAttachment: bgAttachment }}>
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route element={<RestrictedRoute />}>
                            <Route path="/" element={<Home />} />
                        </Route>
                        <Route element={<PrivateRoute />}>
                            <Route path="expenses" element={<Expenses />} />
                            <Route path="incomes" element={<Incomes />} />
                            <Route path="reports" element={<Reports />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};
