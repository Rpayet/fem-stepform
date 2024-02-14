import { Route, Routes } from 'react-router-dom';
import './App.css';
import SubscribeForm from './pages/Forms/SubscribeForm';

export default function App() {
    return (
        <div id="App">
            <Routes>
                <Route path='/' element={<SubscribeForm />}>
                    <Route path='step1' element={<h3>Step 1</h3>} />
                    <Route path='step2' element={<h3>Step 2</h3>} />
                    <Route path='step3' element={<h3>Step 3</h3>} />
                    <Route path='step4' element={<h3>Step 4</h3>} />
                </Route>    
            </Routes>
        </div>
    );
}

