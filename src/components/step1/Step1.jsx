import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const inputStyle = `block md:py-[14px] py-2 md:pl-4 pl-4 border-coolGray border-2 rounded-[8px] w-full text-base text-marineBlue font-normal hover:border-pastelBlue focus:border-pastelBlue`;
const labelStyle = 'text-marineBlue text-sm md:text-base font-normal leading-[18px]';
const errStyle = 'text-strawberryRed text-sm md:text-base font-normal leading-[18px]';

const Step1 = () => {
  const initialValues = {
    name: "",
    email: "",
    number: ""
  }
  
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const {setPageActive} = useContext(AppContext)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
    console.log(formValues);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  })


  const validate = (values) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const errors = {};

    if(!values.name) {
      errors.name = "Name cannot be empty";
    }
    if(!values.email) {
      errors.email = "Email cannot be empty";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Looks like this is not an email"
    }
    if (!values.number) {
      errors.number = "This field is required"
    }
    return errors
  }

  return (
    
    <div>
      <div>
        <form action="" onSubmit={handleSubmit} className='flex justify-center md:block'>
          <div className='w-11/12 md:w-auto mx-auto bg-white absolute top-[100px] md:static p-5 md:p-0 rounded-md drop-shadow-md md:drop-shadow-none'>
            <div className='md:mb-10 mb-7'>
              <h1 className=' text-marineBlue font-bold md:text-[30px] md:leading-[34px] pb-3'>Personal info</h1>
              <p className='text-base text-coolGray leading-[18px] font-normal'>Please provide your name, email address and phone number.</p>
            </div>

            <div className='md:mb-6 mb-4'>
              <div className='mb-2 flex justify-between'>
                <label htmlFor="name" className={labelStyle}>Name</label>
                <p className={errStyle}>{formErrors.name}</p>
              </div>
              <input type="text" name="name" id="name" placeholder='e.g. Stephen King' className={inputStyle} value={formValues.name} onChange={handleChange}/>
            </div>

            <div className='mb-6'>
              <div className='mb-2 flex justify-between'>
                <label htmlFor="email" className={labelStyle}>Email Address</label>
                <p className={errStyle}>{formErrors.email}</p>
              </div>
              <input type="email" name="email" id="email" placeholder='e.g. stephenking@lorem.com' className={inputStyle} value={formValues.email} onChange={handleChange}/>
            </div>

            <div className=''>
              <div className='mb-2 flex justify-between'>
                <label htmlFor="number" className={labelStyle}>Phone Number</label>
                <p className={errStyle}>{formErrors.number}</p>
              </div>
              <input type="tel" name="number" id="number" placeholder='e.g. +1 234 567 890' className={inputStyle} value={formValues.number} onChange={handleChange} onKeyUp={(e) => {
                const inputValue = e.target.value.replaceAll(" ", "");
                if (e.target.value.length > 10) {
                  e.target.value = inputValue.replace(/(\d{1})(\d{2})(\d{3})(\d{4})(\d+)/, '$1 $2 $3 $4 $5')
                } else if (e.target.value.length > 6) {
                  e.target.value = inputValue.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')
                } else if (e.target.value.length > 8) {
                  e.target.value = inputValue.replace(/(\d{2})(\d{2})(\d{2})(\d+)/, '$1 $2 $3 $4')
                } else if (e.target.value.length > 4) {
                  e.target.value = inputValue.replace(/(\d{3})(\d+)/, '$1 $2')
                }
              }} />
            </div>

          </div>

          <div className='md:mt-[93px] flex justify-end fixed left-0 right-0 bottom-0 md:static h-[72px] p-4 md:p-0 bg-white'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
              <Link to="/plan">
              <button type='submit' className='bg-marineBlue py-2 md:py-[15px] px-4 md:px-6 text-magnolia rounded-lg hover:opacity-90 focus:opacity-90 text-base md:text-xl' onClick={() => {setPageActive('plan')}}>Next Step</button>
              </Link>
            ) : (
              <button type='submit' className='bg-marineBlue py-2 md:py-[15px] px-4 md:px-6 text-magnolia rounded-lg hover:opacity-90 focus:opacity-90 text-base md:text-xl'>Next Step</button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Step1
