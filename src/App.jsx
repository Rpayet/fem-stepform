import { Route, Routes } from 'react-router-dom';
import './App.css';
import SubscribeForm from './pages/SubscribeForm';
import { Step1, Step2, Step3, Step4, Confirm } from './pages/Forms/subscribe/SubFormSteps';

export default function App() {
    return (
        <div id="App">
            <Routes>
                <Route path='/' element={<SubscribeForm />}>
                    <Route path='step1' element={<Step1 />} />
                    <Route path='step2' element={<Step2 />} />
                    <Route path='step3' element={<Step3 />} />
                    <Route path='step4' element={<Step4 />} />
                    <Route path='confirm' element={<Confirm />} />
                </Route>    
            </Routes>
        </div>
    );
}

