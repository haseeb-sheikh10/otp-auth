import React from 'react'
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const InputNumber = (props) => {

    return (

        <> 
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8">
                <div className="sm:mx-auto sm:w-full   sm:max-w-sm">
                    <div className='text-center'>
                        <ShieldTwoToneIcon fontSize='large' sx={{ color: "whitesmoke" }} />
                    </div>
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        WELCOME TO OTP LOGIN
                        <br />
                        <span className='font-semibold text-lg text-[#e5e5e5]'>
                            Enter your phone number with country code
                        </span>
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-[whitesmoke] text-center">
                                Phone Number
                            </label>
                            <div className="mt-1">
                                <PhoneInput
                                    country={'pk'}
                                    value={props.ph}
                                    onChange={props.setPh}
                                />

                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={props.handleSendOTP}
                            >
                                {/* <Circles fontSize="small"/> */}
                                Send OTP
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default InputNumber
