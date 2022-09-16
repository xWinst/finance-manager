import { Suspense, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import { Home, Expenses, Income, Reports, PageNotFound } from 'pages';
import { Header, Loader, PrivateRoute, RestrictedRoute } from 'components';
import { refresh } from 'redux/operations';

const Expenses = lazy(() => import('pages/Expenses/Expenses'));
const Incomes = lazy(() => import('pages/Incomes/Incomes'));
const Reports = lazy(() => import('pages/Reports/Reports'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const sid = useSelector(state => state.auth.sid);

    useEffect(() => {
        if (!isLoggedIn && sid) dispatch(refresh(sid));
    }, [isLoggedIn, dispatch, sid]);

    return isLoading ? (
        <Loader />
    ) : (
        <div className="container">
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <RestrictedRoute>
                                    <Home />
                                </RestrictedRoute>
                            }
                        />
                        <Route
                            path="expenses"
                            element={
                                <PrivateRoute>
                                    <Expenses />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="incomes"
                            element={
                                <PrivateRoute>
                                    <Incomes />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="reports"
                            element={
                                <PrivateRoute>
                                    <Reports />
                                </PrivateRoute>
                            }
                        />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};
