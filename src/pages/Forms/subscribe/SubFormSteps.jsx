import { Link } from "react-router-dom"

export function Step1() {
    return (
        <>
            <div>
                <h3>Personal info</h3>
                <p>Please provide your name, email address, and phone number.</p>
            </div>
            <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder="e.g. Stephen king" />

                <label htmlFor='email'>Email Address</label>
                <input type='email' id='email' placeholder="e.g. stephenking@lorem.com" />

                <label htmlFor='phone'>Phone Number</label>
                <input type='tel' id='phone' placeholder="e.g. +1 234 567 890" />
            </div>
        </>
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
        <>
            <div>
                <h3>Select your plan</h3>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div>
                {planArray.map((p) => (
                    <div key={p.id} onClick={() => {handlePlanChange(p)}} className="plan-card">
                        <img src={`${p.img}`} alt={p.name} />
                        <p>{p.name}</p>
                        {formData.billing === 'monthly'
                            ? <p>${p.monthly}/mo</p>
                            : <p>${p.yearly}/yr</p>
                        }
                    </div>
                ))}
            </div>
            <div>
                <p>Monthly</p>
                <input type="checkbox" onChange={(e) => {handleBillChange(e)}}/>
                <p>Yearly</p>
            </div>
        </>
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
        <>
            <div>
                <h3>Pick add-ons</h3>
                <p>Add-ons help enhance your gaming experience.</p>
            </div>
            <div>
                {addOnsArray.map((a) => (
                    <div key={a.id} onClick={() => {handleAddOnChange(a)}}>
                        <input 
                            type="checkbox" 
                            checked={formData.addOns.some(addOn => addOn.id === a.id)}
                            onChange={() => {}} // OnChange is required for the input to be controlled
                            readOnly // Prevents the user from changing the input
                        />
                        <div>
                            <div>
                                <p>{a.name}</p>
                                <p>{a.details}</p>
                            </div>
                            {formData.billing === 'monthly'
                                ? <p>+${a.monthly}/mo</p> 
                                : <p>+${a.yearly}/yr</p>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}


export function Step4() {
    return (
        <>
            <div>
                <h3>Finishing up</h3>
                <p>Double-check everything looks OK before confirming.</p>
            </div>
            <div>
                <div>
                    <div>
                        <p>Service</p>
                        <Link>Change</Link>
                    </div>
                    <p>$9/mo</p>
                </div>
                <div>
                    <p>Online service</p>
                    <p>+$1/mo</p>
                </div>
                <div>
                    <p>Larger storage</p>
                    <p>+$2/mo</p>
                </div>
                <div>
                    <p>Total (per month)</p>
                    <p>$12/mo</p>
                </div>
            </div>
        </>
    )
}

export function Confirm() {
    return (
        <>
            <img src="../src/assets/images/icon-thank-you.svg" alt="thks" />
            <h3>Thank you!</h3>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. 
                If you ever need support, please feel free to email us at <a href="">support@loremgaming.com</a>.</p>
        </>
    )
}