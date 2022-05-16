import { useState } from "react"

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (event) => {
        console.log('onChange');
        const { target: { value } } = event;

        let willUpdate = true;

        if ( typeof validator === 'function' ) {
            willUpdate = validator(value);
        }

        if ( willUpdate ) {
            setValue(value);
        }
        
    }

    return { value, onChange }
}

export default function Hooks() {
    const maxLength = value => !value.includes("@");
    const name = useInput('Mr.', maxLength);
    
    return (
        <main style={{ marginLeft: '6rem', padding: "1rem 0" }}>
            <h2>Hooks</h2>
            <input placeholder="Name" {...name}/>
        </main>
    )
}

<style>
    
</style>