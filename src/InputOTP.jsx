import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import OTPInput from "otp-input-react";

const InputOTP = (props) => {

    const { OTP, setOTP, handleVerifyOtp } = props;
    

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className='text-center'>
                    <VpnKeyTwoToneIcon fontSize='large' sx={{ color: "whitesmoke" }} />
                </div>
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    ENTER 6 DIGIT CODE
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="ph" className="block text-sm font-medium leading-6 text-[whitesmoke] text-center">
                            Enter your OTP
                        </label>

                        <OTPInput className='mt-2 otp-container text-black' value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" disabled={false} />

                    </div>

                    <div>
                        <button
                            type="button"
                            className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            onClick={handleVerifyOtp}
                        >

                            VERIFY OTP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default InputOTP
