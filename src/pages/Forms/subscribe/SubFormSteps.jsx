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

export function Step2() {
    return (
        <>
            <div>
                <h3>Select your plan</h3>
                <p>You have the option of monthly or yearly billing.</p>
            </div>
            <div>
                <div>
                    <img src="" alt="" />
                    <p>Arcade</p>
                    <p>$9/mo</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Advanced</p>
                    <p>$12/mo</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Arcade</p>
                    <p>$15/mo</p>
                </div>
            </div>
            <div>
                <p>Monthly</p>
                <input type="checkbox" />
                <p>Yearly</p>
            </div>
        </>
    )
}

export function Step3() {
    return (
        <>
            <div>
                <h3>pick add-ons</h3>
                <p>Add-ons help enhance your gaming eperience.</p>
            </div>
            <div>
                <div>
                    <input type="checkbox" />
                    <div>
                        <p>Online service</p>
                        <p>Access to multiplayer games</p>
                    </div>
                    <p>+$1/mo</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <div>
                        <p>Larger storage</p>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    <p>+$2/mo</p>
                </div>
                <div>
                    <input type="checkbox" />
                    <div>
                        <p>Customizable profile</p>
                        <p>Custom theme on your profile</p>
                    </div>
                    <p>+$2/mo</p>
                </div>
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
