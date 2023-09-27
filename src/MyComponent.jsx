import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function MyComponent() {
    const { control, handleSubmit, watch } = useForm();

    // Here we are storing the firstName form field value
    // There is no need to put this into state
    const firstName = watch('firstName'); 

    // Dummy submit function
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name:</label>
                <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} />}
                />
            </div>
            {/* Display something based on the value of the first name */}
            {firstName === 'John' ? (
                <p>Hello, John!</p>
            ) : (
                <p>Hello, {'Stranger'}!</p>
            )}
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyComponent;
