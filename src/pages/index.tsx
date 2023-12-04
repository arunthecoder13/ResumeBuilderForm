import { LeftSidebar } from "@/components/left-sidebar";
import { useState } from "react";

const formSteps = [
  {
    title: "Personal Information",
    fields: [
      { id: "name", label: "Your name", type: "text", placeholder: "Enter your fullname" },
      { id: "email", label: "Email address", type: "email", placeholder: "your.email@example.com" },
      { id: "contactno", label: "Contact no", type: "tel", placeholder: "Enter your contactno" },
      { id: "country", label: "Your country", type: "text", placeholder: "Enter your country" },
    ],
  },
  {
    title: "Work Experiences",
    fields: [
      { id: "companyname", label: "Company Name", type: "text", placeholder: "XYZ Corp" },
      { id: "position", label: "Position", type: "text", placeholder: "Software Developer" },
      { id: "workDuration", label: "Work Duration", type: "text", placeholder: "2018 - 2022" },
      { id: "submit-workexp", label: "Add to List", type: "button", placeholder: "" },

    ],
  },
  {
    title: "Education History",
    fields: [
      { id: "universityname", label: "University Name", type: "text", placeholder: "ABC University" },
      { id: "degree", label: "Degree", type: "text", placeholder: "Bachelor of Science" },
      { id: "graduationyear", label: "Graduation Year", type: "text", placeholder: "2022" },
      { id: "submit-educ", label: "Add to List", type: "button", placeholder: "" },
    ],
  },
  {
    title: "Finish",
    fields: [],
  },
];

export default function Home() {
  const currentData = {
    name: null,
    email: null,
    contactno: null,
    country: null,
    workExperience: [],
    educationHistory: [],
  };
  const currenteducationObj = {
    universityname: null,
    degree: null,
    graduationyear: null
  }
  const currentWorkexpObj = {
    companyname: null,
    position: null,
    workDuration: null
  }
  const [curentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<any>(currentData);
  const [educationObj, setEducationObj] = useState(currenteducationObj);
  const [workExpObj, setworkExpObj] = useState(currentWorkexpObj);

  const isValidMobileNumber = (value: any) => {
    const mobileNumberPattern = /^[0-9()+\-\s]+$/;
    return mobileNumberPattern.test(value);
  };

  const handleChange = (fieldname: string, value: any) => {
    switch (fieldname) {
      case 'name':
        setFormData((prevData: any) => ({ ...prevData, name: value.toString() }));
        break;
      case 'email':
        setFormData((prevData: any) => ({ ...prevData, email: value.toString() }));
        break;
      case 'contactno':
        if (isValidMobileNumber(value)) {
          setFormData((prevData: any) => ({ ...prevData, contactno: value }));
        }
        break;
      case 'country':
        setFormData((prevData: any) => ({ ...prevData, country: value }));
        break;
      case 'workExperience':
        alert(JSON.stringify(value));
        if (value != currentWorkexpObj) {
          const getCurrectWorkExpList = formData.workExperience;
          getCurrectWorkExpList.push(currentWorkexpObj);
          setFormData((prevData: any) => ({ ...prevData, workExperience: getCurrectWorkExpList }));
          setworkExpObj({ ...currentWorkexpObj })
          alert("Work Experience updated to the List");
        }
        break;
      case 'educationHistory':
        if (value != currenteducationObj) {
          const getCurrenteducationList = formData.educationHistory;
          getCurrenteducationList.push(currenteducationObj);
          setFormData((prevData: any) => ({ ...prevData, educationHistory: getCurrenteducationList }));
          setEducationObj(currenteducationObj);
          alert("Education history updated to the List");
        }
        break;
      case 'universityname':
        setEducationObj((prevData: any) => ({ ...prevData, universityname: value }));
        break;
      case 'degree':
        setEducationObj((prevData: any) => ({ ...prevData, degree: value }));
        break;
      case 'graduationyear':
        setEducationObj((prevData: any) => ({ ...prevData, graduationyear: value }));
        break;
      case 'companyname':
        alert(JSON.stringify(workExpObj));
        setworkExpObj((prevData: any) => ({ ...prevData, companyname: value }));
        break;
      case 'position':
        setworkExpObj((prevData: any) => ({ ...prevData, position: value }));
        break;
      case 'workDuration':
        setworkExpObj((prevData: any) => ({ ...prevData, workDuration: value }));
        break;
      default:
        break;
    }
  };

  const renderFields = (fields: any) => {
    return fields.map((field: any) => (
      <div key={field.id} className={`px-2 w-full lg:w-1/2 my-2`}>
        {field.type === "button" ?
          <button className="mt-7 bg-green-300 text-white py-2 px-4 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:border-blue-300" type="button"
            onClick={() => {
              if (field.id === "submit-workexp") {
                handleChange('workExperience', workExpObj)
              } else if (field.id === "submit-educ") {
                handleChange('educationHistory', educationObj)
              }
            }}
          >
            {field.label}
          </button> :
          <>
            <label htmlFor={field.id} className="block mb-2 text-sm font-medium">
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              className={`bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5`}
              placeholder={field.placeholder}
              value={formData[field.id.toString()]}
              onChange={(e) => handleChange(field.id.toString(), e.target.value)}
            />
          </>
        }

      </div>
    ));
  };

  return (
    <div className="lg:container mb-5 mx-auto lg:h-screen overflow-auto lg:overflow-hidden lg:py-10">
      <div className="flex flex-row justify-center h-full lg:rounded-2xl lg:shadow-xl bg-[#FFFFFF]">
        <LeftSidebar curentStep={curentStep} />

        <div className="w-[100%] lg:w-[75%] h-screen m-2 p-2 lg:m-5 lg:p-5 overflow-auto">

          <div key={curentStep.toString() + "fields"} className="my-7">
            <h4 className="font-semibold text-black text-3xl">{formSteps[curentStep].title}</h4>
            <h5 className="font-normal text-black text-base mt-4">{/* Add step description if needed */}</h5>
            <form className="flex flex-col sm:flex-row flex-wrap">
              {renderFields(formSteps[curentStep].fields)}
            </form>
          </div>

          <div className="flex justify-end gap-3 my-3">
            {curentStep > 0 && curentStep < 3 && <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300" type="button"
              onClick={() => { setCurrentStep(curentStep - 1) }}>
              Previous
            </button>}
            {curentStep < 2 && <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300" type="button"
              onClick={() => { setCurrentStep(curentStep + 1) }}>
              Next
            </button>}
            {curentStep === 2 && <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300" type="button"
              onClick={() => { setCurrentStep(curentStep + 1) }}>
              Finish
            </button>}
          </div>
        </div>

        {/* <div className="w-[100%] lg:w-[75%] h-screen m-2 p-2 lg:m-5 lg:p-5">
          <div className="my-7">
            <h4 className="font-semibold text-black text-3xl">Personal Information</h4>
            <h5 className="font-normal text-black text-base mt-4">Enter your personal information to get closer to companies.</h5>
          </div>
          <form className="flex flex-col sm:flex-row flex-wrap">
            <div className="px-2 w-full lg:w-1/2 my-2">
              <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700">Your name</label>
              <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Bonnie Green" />
              <p className="mt-2 text-sm text-green-600 "><span className="font-medium">Alright!</span> Username available!</p>
            </div>

            <div className="px-2 w-full lg:w-1/2 my-2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-700">Email Address</label>
              <input type="email" id="email" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="your.email@example.com" />
            </div>

            <div className="px-2 w-full lg:w-1/2 my-2">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-red-700">Phone Number</label>
              <input type="tel" id="phone" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder="123-456-7890" />
            </div>

            <div className="px-2 w-full lg:w-1/2 my-2">
              <label htmlFor="dob" className="block mb-2 text-sm font-medium text-red-700">Date of Birth</label>
              <input type="date" id="dob" className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" />
            </div>

            <div className="px-2 w-full my-2">
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-green-700">Address</label>
              <textarea id="address" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 resize-none" placeholder="Enter your address"></textarea>
            </div>
          </form>
          <div className="flex justify-end gap-3 my-3">
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300" type="button">
              Previous
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300" type="button">
              Next
            </button>
          </div>
        </div> */}




      </div>
    </div >
  )
}
