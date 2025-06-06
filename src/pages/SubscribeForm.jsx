import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { SubFormContext } from "../context/SubFormProvider";

export default function SubscribeForm() {

    const { currentStep, setCurrentStep, setFormData } = useContext(SubFormContext);

    useEffect(() => {

        if (window.location.pathname.includes('step')) {
            const step = parseInt(window.location.pathname.slice(-1));
            setCurrentStep(step);
        }

        return () => {
            setCurrentStep(1);
            setFormData({
                name: '', email: '', phone: '',
                plan: {}, billing: 'monthly', addOns: [],}
            );
        };
    }, []);

    return (
        <form id='Sub-form'>
            {/** todo - json to array map */}
            <div className='registration-steps'>
                <div className='step'>
                    <p className={`step-token ${currentStep === 1 ? 'active' : 'inactive'}`}>1</p>
                    <div className='step-details'>
                        <p className='step-title'>Step 1</p>
                        <p className='step-subtitle'>Your info</p>
                    </div>
                </div>
                <div className='step'>
                    <p className={`step-token ${currentStep === 2 ? 'active' : 'inactive'}`}>2</p>
                    <div className='step-details'>
                        <p className='step-title'>Step 2</p>
                        <p className='step-subtitle'>Select plan</p>
                    </div>
                </div>
                <div className='step'>
                    <p className={`step-token ${currentStep === 3 ? 'active' : 'inactive'}`}>3</p>
                    <div className='step-details'>
                        <p className='step-title'>Step 3</p>
                        <p className='step-subtitle'>Add-ons</p>
                    </div>
                </div>
                <div className='step'>
                    <p className={`step-token ${currentStep === 4 || currentStep === 5 ? 'active' : 'inactive'}`}>4</p>
                    <div className='step-details'>
                        <p className='step-title'>Step 4</p>
                        <p className='step-subtitle'>Summary</p>
                    </div>
                </div>
            </div>

            <Outlet /> {/* stepcard - nested routes */}

            <div className='btn-form-nav'>
                {(currentStep > 1 && currentStep < 5) 
                    && <Link className='btn start' onClick={() => {setCurrentStep(currentStep-1)}} to={`/fem-stepform/subscribe/step${currentStep-1}`} >Go Back</Link>}
                {(currentStep < 4) 
                    && <Link className='btn end' onClick={() => {setCurrentStep(currentStep+1)}} to={`/fem-stepform/subscribe/step${currentStep + 1}`} >Next Step</Link>}
                {currentStep === 4 
                    && <Link className='btn end confirm' onClick={() => {setCurrentStep(currentStep+1)}} to={`/fem-stepform/subscribe/confirm`} >Confirm</Link>}
                {currentStep === 5 &&
                    <Link className='btn center' to='/fem-stepform'>Home</Link>}
            </div>
        </form>
    );
}