import { useContext, useEffect } from "react";
import { Link } from "react-router-dom"
import { SubFormContext } from "../../../context/SubFormProvider";

export default function SubFormSteps() {

    const {formData , setFormData, planArray, addOnsArray, currentStep} = useContext(SubFormContext);

    switch (currentStep) {
        case 2:
            return <Step2 planArray={planArray} formData={formData} setFormData={setFormData} />
        case 3:
            return <Step3 addOnsArray={addOnsArray} formData={formData} setFormData={setFormData} />
        case 4:
            return <Step4 formData={formData} />
        case 5:
            return <Confirm />
        default:
            return <Step1 formData={formData} setFormData={setFormData} />
    }
}

export function Step1({formData, setFormData}) {
    return (
        <div className='step-card'>
            <div className='header'>
                <h3 className='title'>Personal info</h3>
                <p className='subtitle'>Please provide your name, email address, and phone number.</p>
            </div>
            <div className='body'>
                <div>
                    <label className='label' htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name'
                        className='input'
                        placeholder="e.g. Stephen king"
                        value={formData.name}
                        onChange={(e) => {setFormData({...formData, name: e.target.value})}} />
                </div>

                <div>
                    <label className='label' htmlFor='email'>Email Address</label>
                    <input 
                        type='email'
                        id='email'
                        className='input'
                        placeholder="e.g. stephenking@lorem.com"
                        value={formData.email}
                        onChange={(e) => {setFormData({...formData, email: e.target.value})}} />
                </div>

                <div>
                    <label className='label' htmlFor='phone'>Phone Number</label>
                    <input 
                        type='tel' 
                        id='phone'
                        className='input'
                        placeholder="e.g. +1 234 567 890"
                        value={formData.phone}
                        onChange={(e) => {setFormData({...formData, phone: e.target.value})}} />
                </div>
            </div>
        </div>
    )
}

export function Step2({planArray, formData, setFormData}) {

    const handleBillChange = (e) => {
        const checked = e.target.checked;

        if (checked) {
            setFormData({...formData, billing: 'yearly'});
        } else {
            setFormData({...formData, billing: 'monthly'});
        }

    }

    const handlePlanChange = (p) => {
        setFormData({...formData, plan: p});
    }

    return (
        <div className='step-card'>
            <div className='header'>
                <h3 className='title'>Select your plan</h3>
                <p className='subtitle'>You have the option of monthly or yearly billing.</p>
            </div>
            <div className='plan-container'>
                {planArray.map((p) => (
                    <div 
                        key={p.id} 
                        onClick={() => {handlePlanChange(p)}} 
                        className={`plan-card ${formData.plan.id === p.id ? 'active' : ''}`}>

                            <div className={p.name.toLowerCase()}></div>
                            <div className='plan-bill'>
                                <p className='bill-title'>{p.name}</p>
                                {formData.billing === 'monthly'
                                    ? <p className='bill-price'>${p.monthly}/mo</p>
                                    : <>
                                        <p className='bill-price'> ${p.yearly}/yr</p>
                                        <p className='bill-promo'>{p.promo}</p>
                                    </>
                                }

                        </div>
                    </div>
                ))}
            </div>
            <div className='bill-option'>
                <p className={formData.billing === 'monthly' ? 'select' : ''}>Monthly</p>
                <div className='checkbox-wrapper-2'>
                    <input className='sc-gJwTLC ikxBAC' type="checkbox" onChange={(e) => {handleBillChange(e)}}/>
                </div>
                <p className={formData.billing === 'yearly' ? 'select' : ''}>Yearly</p>
            </div>
        </div>
    )
}

export function Step3({addOnsArray, formData, setFormData}) {

    const handleAddOnChange = (selectedAddOn) => {
        // Check if the add-on is already selected
        const isAddOnSelected = formData.addOns.find(addOn => addOn.id === selectedAddOn.id);
        
        if (isAddOnSelected) {
            // If the add-on is selected, remove it from the list
            setFormData({
                ...formData,
                addOns: formData.addOns.filter(addOn => addOn.id !== selectedAddOn.id),
            });
        } else {
            // If the add-on is not selected, add it to the list
            setFormData({
                ...formData,
                addOns: [...formData.addOns, selectedAddOn],
            });
        }
    }

    return (
        <div className='step-card'>
            <div className='header'>
                <h3 className='title'>Pick add-ons</h3>
                <p className='subtitle'>Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='addons-container'>
                {addOnsArray.map((a) => (
                    <div 
                        key={a.id} 
                        onClick={() => {handleAddOnChange(a)}}
                        className={`addons-card ${formData.addOns.some(fda => fda.id === a.id) ? 'active' : '' }`}>

                            <input 
                                type="checkbox" 
                                checked={formData.addOns.some(addOn => addOn.id === a.id)}
                                className='checkbox-1'
                                onChange={() => {}} // OnChange is required for the input to be controlled
                                readOnly // Prevents the user from changing the input
                            />
                            <div className='addons-plan'>
                                <div className='addon'>
                                    <p className='addon-title'>{a.name}</p>
                                    <p className='addon-details'>{a.details}</p>
                                </div>
                                {formData.billing === 'monthly'
                                    ? <p className='addon-price'>+${a.monthly}/mo</p> 
                                    : <p className='addon-price'>+${a.yearly}/yr</p>
                                }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export function Step4({formData}) {

    const billing = formData.billing === 'monthly' ? 'mo' : 'yr';

    return (
        <div className='step-card'>
            <div className='header'>
                <h3 className='title'>Finishing up</h3>
                <p className='subtitle'>Double-check everything looks OK before confirming.</p>
            </div>
            <div>
                <div>
                    <div>
                        <p>{formData.plan.name}({formData.billing})</p>
                        <Link>Change</Link>
                    </div>
                    <p>$9/mo</p>
                </div>
                {formData.addOns.map((a) => (
                    <div key={a.id}>
                        <div>
                            <p>{a.name}</p>
                            <Link>Change</Link>
                        </div>
                        <p>+${a.monthly}/mo</p>
                    </div>
                ))}
                <div>
                    {formData.billing === 'monthly' 
                        ? <p>Total (per month)</p>
                        : <p>Total (per year)</p>
                    }
                    <p>+${}/{formData.billing === 'monthly' ? 'mo' : 'yr'}</p>
                </div>
            </div>
        </div>
    )
}

export function Confirm() {
    return (
        <div className='step-card'>
            <img src="../src/assets/images/icon-thank-you.svg" alt="thks" />
            <h3>Thank you!</h3>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. 
                If you ever need support, please feel free to email us at <a href="">support@loremgaming.com</a>.</p>
        </div>
    )
}
