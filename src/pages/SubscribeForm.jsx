import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { SubFormContext } from "../context/SubFormProvider";

export default function SubscribeForm() {

    const { currentStep, setCurrentStep, setFormData } = useContext(SubFormContext);

    useEffect(() => {
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
            <div className='steps-ariane'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>

            <Outlet />

            <div className='btn-form-nav'>
                {(currentStep > 1 && currentStep < 5) 
                    && <Link className='btn start' onClick={() => {setCurrentStep(currentStep-1)}} to={`/subscribe/step${currentStep-1}`} >Go Back</Link>}
                {(currentStep < 4) 
                    && <Link className='btn end' onClick={() => {setCurrentStep(currentStep+1)}} to={`/subscribe/step${currentStep + 1}`} >Next Step</Link>}
                {currentStep === 4 
                    && <Link className='btn end' onClick={() => {setCurrentStep(currentStep+1)}} to={`/subscribe/confirm`} >Confirm</Link>}
                {currentStep === 5 &&
                    <Link className='btn center' to='/'>Home</Link>}
            </div>
        </form>
    );
}