import { Suspense, useEffect, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Header, Loader } from 'components';
import { refresh } from 'redux/userOperations';

const Expenses = lazy(() => import('pages/Expenses/Expenses'));
const Incomes = lazy(() => import('pages/Incomes/Incomes'));
const Reports = lazy(() => import('pages/Reports/Reports'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));
const Home = lazy(() => import('pages/Home/Home'));

// let render = 0;

export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.user.isLoading);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const sid = useSelector(state => state.user.sid);
    const { pathname } = useLocation();
    const className = pathname === '/' ? 'container' : 'container-with-user';
    // console.log('render # ', ++render, 'isLoggedIn: ', isLoggedIn, 'sid: ', sid);
    useEffect(() => {
        // console.log('render in EFFECT ', render);
        if (!isLoggedIn && sid) dispatch(refresh(sid));
        // if (isLoggedIn) dispatch(getUser());
    }, [isLoggedIn, dispatch, sid]);

    return isLoading ? (
        <Loader />
    ) : (
        <div className={className}>
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="expenses" element={<Expenses />} />
                        <Route path="incomes" element={<Incomes />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};
