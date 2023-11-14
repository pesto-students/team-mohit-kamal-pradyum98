import React, {  Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const GiftList = React.lazy(() => import('./components/GiftList')); // Lazy-loaded component

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header />
                <Form />
                <Suspense fallback={<div>Loading Gift Details...</div>}>
                    <GiftList />
                </Suspense>
            </div>
        </Provider>
    );
}

export default App;
