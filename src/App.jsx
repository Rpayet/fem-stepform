import { Route, Routes } from 'react-router-dom';
import './App.css';
import SubscribeForm from './pages/SubscribeForm';
import { Step1, Step2, Step3, Step4, Confirm } from './pages/Forms/subscribe/SubFormSteps';
import { useContext } from 'react';
import { SubFormContext } from './context/SubFormProvider';

export default function App() {

    const { formData, setFormData, planArray, addOnsArray } = useContext(SubFormContext);

    return (
        <div id="App">
            <Routes>
                <Route path='/' element={<SubscribeForm />}>
                    <Route path='step1' element={<Step1 formData={formData} setFormData={setFormData} />} />
                    <Route path='step2' element={<Step2 planArray={planArray} formData={formData} setFormData={setFormData} />} />
                    <Route path='step3' element={<Step3 addOnsArray={addOnsArray} formData={formData} setFormData={setFormData} />} />
                    <Route path='step4' element={<Step4 formData={formData} />} />
                    <Route path='confirm' element={<Confirm />} />
                </Route>    
            </Routes>
        </div>
    );
}

