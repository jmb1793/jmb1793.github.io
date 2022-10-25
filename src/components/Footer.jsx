import React, { useState, useRef } from 'react';
import { form } from '../style.js';
import axios from "axios";
import ReCAPTCHA from 'react-google-recaptcha';

const Footer = () => {
    // Recaptcha and formspark constants
    const formID = "U0Or6Pkg";
    const formSparkURL = `https://submit-form.com/${formID}`;
    const recaptchaKey = '6LeEAaIiAAAAAPkWyudOYVIoT_kAf0zMTrEPbg4S';
    const recaptchaRef = useRef();

    // Default objects
    const formDefault = {
        name:"",
        email:"",
        message:""
    }
    const alertMessage = {
        class: String,
        text: String
    }

    // React Hooks
    const [formState, setFormState] = useState(formDefault);
    const [submitting, setSubmitting] = useState(false);
    const [alert, setAlert] = useState()
    const [recaptchaToken, setRecaptchaToken] = useState();

    const submitForm = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async () => {
        const payload = {
            ...formState,
            "g-recaptcha-response": recaptchaToken
        };
        try {
            const result = await axios.post(formSparkURL, payload);
            console.log(result)
            setAlert({
                class: 'bg-green-500',
                text: 'Thanks, I will get back to you as soon as possible!'
            })
            setFormState(formDefault);
            recaptchaRef.current.reset();
        } catch(error){
            console.log(error);
            setAlert({
                class: 'bg-red-500',
                text: 'Sorry, something went wrong! Please try again.'
            })
        }
    };

    const updateFormControl = (e) =>{
        const {id, value} = e.target;
        const formKey = id;
        const updatedFormState = {...formState};
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    }

    const updateRecaptchToken = (token) => {
        setRecaptchaToken(token);
    };

    return (

        <section id="contact" className="h-screen snap-center">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <div className='flex flex-col items-center'>
                    <h2 className="text-accent text-[54px]">Contact Me</h2>
                    <p  className="text-secondary text-[1.1rem]">If you are interested</p>
                    <p  className="text-secondary text-[1.1rem]">Leave me a <span className='text-highlight'>message!</span></p>
                </div>

                {alert && <div className={`my-4 text-white w-full p-4 ${alert.class}`}>{alert.text}</div>}

                <form className="bg-transparent mt-5" method="POST" onSubmit={submitForm}>
                    <div>
                        <label htmlFor="name" className={`${form.label}`}>Name</label>
                        <input onChange={updateFormControl}
                                id="name" 
                                value={formState.name} 
                                className={`${form.input} caret-accent`} 
                                type="text"  max-length="40" 
                                placeholder="Full Name"/>
                    </div>

                    <div>
                        <label htmlFor="email" className={`${form.label}`}>Email </label>
                        <input 
                            onChange={updateFormControl} 
                            id="email" 
                            value={formState.email} 
                            className={`${form.input} caret-accent`} 
                            type="text"  
                            placeholder="username@email.domain"/>
                    </div>

                    <div>
                        <label htmlFor="message" className={`${form.label}`}>Leave a Message</label>
                        <textarea onChange={updateFormControl} id="message" value={formState.message} className={`${form.input} caret-accent`} type="text" placeholder="Leave a message..."/>
                    </div>
                    
                    
                    <ReCAPTCHA 
                        ref={recaptchaRef}
                        sitekey={recaptchaKey}
                        onChange={updateRecaptchToken}
                    />
                    <button disabled={submitting} className={`${form.button}`} type="submit">{submitting ? 'Submitting..' : 'Message me'} </button>
                </form>
            </div>
        </section>
    );
};

export default Footer;