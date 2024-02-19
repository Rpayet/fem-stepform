import { createContext, useEffect, useState } from "react";

export const SubFormContext = createContext();

export const SubFormProvider = ({children}) => {

    const [currentStep, setCurrentStep] = useState(1);

    // todo - Only use id to fill plan & addOns
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        plan: {},
        billing: 'monthly',
        addOns: [],
    });

    // todo - make a json to fake call to a server
    const planArray = [
        {
            id: 1,
            name: 'Arcade',
            monthly: 9,
            yearly: 90,
            promo: '2 months free',
            img: 'icon-arcade.svg',
        },
        {
            id: 2,
            name: 'Advanced',
            monthly: 12,
            yearly: 120,
            promo: '2 months free',
            img: 'icon-advanced.svg',
        },
        {
            id: 3,
            name: 'Pro',
            monthly: 15,
            yearly: 150,
            promo: '2 months free',
            img: 'icon-pro.svg',
        }
    ];

    const addOnsArray = [
        {
            id: 1,
            name: 'Online service',
            details: 'Access to multiplayer games',
            monthly: 1,
            yearly: 10,
        },
        {
            id: 2,
            name: 'Larger storage',
            details: 'Extra 1TB of cloud save',
            monthly: 2,
            yearly: 20,
        },
        {
            id: 3,
            name: 'Customizable profile',
            details: 'Custom theme on your profile',
            monthly: 2,
            yearly: 20,
        }
    ];
    
    return (
        <SubFormContext.Provider value={{formData, setFormData, planArray, addOnsArray, currentStep, setCurrentStep}}>
            {children}
        </SubFormContext.Provider>
    )
}