import { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Home, Expenses, Income, Reports, PageNotFound } from 'pages';
import { Header, Loader } from 'components';
import { refresh, getUser } from 'redux/operations';

export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.auth.isLoading);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const sid = useSelector(state => state.auth.sid);

    useEffect(() => {
        if (!isLoggedIn && sid) dispatch(refresh(sid));
        // console.log('isLoggedIn: ', isLoggedIn);
        if (isLoggedIn) dispatch(getUser());
    }, [isLoggedIn, dispatch, sid]);

    return isLoading ? (
        <Loader />
    ) : (
        <div className="container">
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="expenses" element={<Expenses />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};
