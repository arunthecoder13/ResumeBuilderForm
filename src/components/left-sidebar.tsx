import React from 'react'

export const LeftSidebar = ({ curentStep }: { curentStep: number }) => {
    return (
        <div className="hidden lg:flex w-[25%] flex-col bg-[#304767] p-7 rounded-l-2xl">
            <h3 className="font-bold text-white text-2xl">AI Generation</h3>

            <div className="my-7">
                <h4 className="font-semibold text-white text-xl">Step {curentStep + 1}</h4>
                <h5 className="font-normal text-white text-sm mt-4">Enter your required details to get closer to companies.</h5>
            </div>

            <div className="my-10 flex flex-col justify-center items-center">
                <ol className="relative text-gray-500 border-s border-gray-200">
                    <li className="mb-10 ms-10">
                        <span className={`absolute flex items-center justify-center w-9 h-9 ${curentStep + 1 >= 1 ? 'bg-green-200' : 'bg-gray-100'} rounded-full -start-5 ring-4 ring-white`}>
                            {curentStep >= 1 ? <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg> : 1}
                        </span>
                        <h3 className={`font-medium leading-tight ${curentStep >= 1 && 'text-white'}`}>Personal Information</h3>
                        <p className={`text-sm ${curentStep >= 1 && 'text-white'}`}>Setup details here</p>
                    </li>
                    <li className="mb-10 ms-10">
                        <span className={`absolute flex items-center justify-center w-9 h-9 ${curentStep + 1 >= 2 ? 'bg-green-200' : 'bg-gray-100'} rounded-full -start-5 ring-4 ring-white`}>
                            {curentStep >= 2 ? <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg> : 2}
                        </span>
                        <h3 className={`font-medium leading-tight ${curentStep >= 2 && 'text-white'}`}>Work Experiences</h3>
                        <p className={`text-sm ${curentStep >= 2 && 'text-white'}`}>Setup details here</p>
                    </li>
                    <li className="mb-10 ms-10">
                        <span className={`absolute flex items-center justify-center w-9 h-9 ${curentStep + 1 >= 3 ? 'bg-green-200' : 'bg-gray-100'} rounded-full -start-5 ring-4 ring-white`}>
                            {curentStep >= 3 ? <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg> : 3}
                        </span>
                        <h3 className={`font-medium leading-tight ${curentStep >= 3 && 'text-white'}`}>Education History</h3>
                        <p className={`text-sm ${curentStep >= 3 && 'text-white'}`}>Setup details here</p>
                    </li>
                    <li className="ms-10">
                        <span className={`absolute flex items-center justify-center w-9 h-9 ${curentStep + 1 >= 4 ? 'bg-green-200' : 'bg-gray-100'} rounded-full -start-5 ring-4 ring-white`}>
                            {curentStep >= 3 ? <svg className="w-3.5 h-3.5 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg> : 4}
                        </span>
                        <h3 className={`font-medium leading-tight ${curentStep >= 3 && 'text-white'}`}>Finish</h3>
                        <p className={`text-sm ${curentStep >= 3 && 'text-white'}`}>Final Submit</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}
