import { createContext, useState } from "react";

export const SubFormContext = createContext();

export const SubFormProvider = ({children}) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        plan: '',
        billing: '',
        addOns: [],
    });

    const plan = [
        {
            name: 'Arcade',
            monthly: 9,
            yearly: 90,
            img: 'icon-arcade.svg',
        },
        {
            name: 'Advanced',
            monthly: 12,
            yearly: 120,
            img: 'icon-advanced.svg',
        },
        {
            name: 'Pro',
            monthly: 15,
            yearly: 150,
            img: 'icon-pro.svg',
        }
    ];

    const addOns = [
        {
            name: 'Online service',
            monthly: 1,
            yearly: 10,
        },
        {
            name: 'Larger storage',
            monthly: 2,
            yearly: 20,
        },
        {
            name: 'Customizable profile',
            monthly: 2,
            yearly: 20,
        }
    ];
    
    return (
        <SubFormContext.Provider value={{formData, setFormData, plan, addOns}}>
            {children}
        </SubFormContext.Provider>
    )
}