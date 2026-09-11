import React, { useState } from 'react'
import demoImage from '../../assets/images/request-demo-img.png'
import { IoArrowBack } from 'react-icons/io5'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'


const optionData = [
    "Select your Industry","Other Industry", "Tourism Industry", "Telecom Industry", "Medical Industry", "Insurance Industry",
    "real Estate Industry", "IT Industry", "Hotel Industry", "Banking and Finance Industry", "E-Commerce"
]

const RequestDemoForm = () => {
    const navigate = useNavigate()

    const [submitted, setSubmitted] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        industry: '',
        message: ''
    })

   const inputClass =
    'w-full rounded px-4 py-3 outline-none placeholder:text-[#555555] dark:placeholder:text-[#B5B5B5] transition-all bg-white dark:bg-[#1F2937] text-[#222222] dark:text-white border border-[#E2E2E2] dark:border-[#374151] shadow-[0px_0px_2px_0_#0000001F]'

    const getInputClass = (value) => {
    if (submitted && !value.trim()) {
        return `${inputClass} !bg-red-50 !border-red-500 dark:!bg-red-950/30 dark:!border-red-500`
    }
    return `${inputClass} focus:border-primary dark:focus:border-blue-400`
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmitted(true)

        // Check required fields
        if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !formData.industry
        ) {
            return
        }

        navigate('/thankyou')
    }

    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1)
        } else {
            navigate('/')
        }
    }

    return (
        <section className="relative py-6 md:py-10 xl:py-14 dark:bg-dark-background overflow-hidden">
            <div className="absolute top-0 right-0 w-[27%] h-full bg-blue-900 z-0 lg:block hidden" />

            <div className="relative z-10 max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">
                <button type="button"
                    className="mb-8 w-11 h-11 rounded-full border border-gray-200 hover:bg-gray-200 flex items-center justify-center transition"
                    onClick={handleBack}
                >
                    <IoArrowBack size={20} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="max-w-md">
                        <p className="text-blue-600 font-semibold text-sm md:text-base">
                            REQUEST A DEMO
                        </p>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl mt-2 text-dark dark:text-dark-text font-bold">Let's Schedule a Demo</h2>
                        <form className="space-y-4 mt-8" onSubmit={handleSubmit}noValidate>
                            <input type="text" name="name" placeholder="Name" value={formData.name}
                                onChange={handleChange} className={getInputClass(formData.name)}/>
                            <input type="email" name="email" placeholder="Email" value={formData.email}
                                onChange={handleChange} className={getInputClass(formData.email)}/>
                            <input type="tel" name="phone" placeholder="Phone Number"
                                value={formData.phone} onChange={handleChange}
                                className={getInputClass(formData.phone)}/>
                            <select name="industry" value={formData.industry} onChange={handleChange}
                                className={getInputClass(formData.industry)}>
                                <option value="" disabled>Select your Industry</option>
                                {optionData.map((data, index) => (
                                    <option value={data} key={index}>{data}</option>
                                ))}
                            </select>
                            <textarea name="message" placeholder="Enter Your Message" 
                            value={formData.message} onChange={handleChange} className={inputClass}/>
                            <Button text="REQUEST A DEMO" type="submit"size="lg"
                                className="w-full mt-4 shadow-[0px_2px_4px_0_#60606038]"/>
                        </form>
                    </div>

                    <div className="relative z-10 lg:block hidden">
                        <img src={demoImage} alt="Request a demo"/>
                    </div>
                </div>
            </div>
        </section>
    )}
export default RequestDemoForm

