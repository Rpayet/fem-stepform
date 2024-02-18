import { useContext, useEffect, useState } from "react";
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
            <div>
                <div className='steps-ariane'>
                    <p className={`step ${currentStep === 1 ? 'active' : 'inactive'}`}>1</p>
                    <p className={`step ${currentStep === 2 ? 'active' : 'inactive'}`}>2</p>
                    <p className={`step ${currentStep === 3 ? 'active' : 'inactive'}`}>3</p>
                    <p className={`step ${currentStep === 4 || currentStep === 5 ? 'active' : 'inactive'}`}>4</p>
                </div>

                <Outlet />
            </div>

            <div className='btn-form-nav'>
                {(currentStep > 1 && currentStep < 5) 
                    && <Link className='btn start' onClick={() => {setCurrentStep(currentStep-1)}} to={`/subscribe/step${currentStep-1}`} >Go Back</Link>}
                {(currentStep < 4) 
                    && <Link className='btn end' onClick={() => {setCurrentStep(currentStep+1)}} to={`/subscribe/step${currentStep + 1}`} >Next Step</Link>}
                {currentStep === 4 
                    && <Link className='btn end confirm' onClick={() => {setCurrentStep(currentStep+1)}} to={`/subscribe/confirm`} >Confirm</Link>}
                {currentStep === 5 &&
                    <Link className='btn center' to='/'>Home</Link>}
            </div>
        </form>
    );
}