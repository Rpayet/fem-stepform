import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import SubscribeForm from './pages/SubscribeForm';
import SubFormSteps from './pages/Forms/subscribe/SubFormSteps';

export default function App() {
    return (
        <HashRouter>
            <div id="App">
                <Routes>
                    <Route index path='/' element={<Link to='/subscribe/step1'>Click here to begin</Link>} />
                    <Route path='/subscribe' element={<SubscribeForm />}>
                        <Route path='step1' element={<SubFormSteps />} />
                        <Route path='step2' element={<SubFormSteps />} />
                        <Route path='step3' element={<SubFormSteps />} />
                        <Route path='step4' element={<SubFormSteps />} />
                        <Route path='confirm' element={<SubFormSteps />} />
                    </Route>    
                </Routes>
            </div>
        </HashRouter>
    );
}
