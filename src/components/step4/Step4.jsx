import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import confirmIcon from '../../assets/icon-thank-you.svg';

const Step4 = () => {
  const [confirmation, setConfirmation] = useState(false);
  const {iconChecked1, iconChecked2, iconChecked3, toggleOn, selectedOption, total, setPageActive} = useContext(AppContext);


  const confirmFunc = () => {
    setConfirmation(true);
  }

  const plan = () => {
    if (selectedOption === 'Arcade' && toggleOn) {
      return '$9/mo';
    } else if (selectedOption === 'Arcade' && !toggleOn) {
      return '$90/yr';
    }
    if (selectedOption === 'Advanced' && toggleOn) {
      return '$12/mo';
    } else if (selectedOption === 'Advanced' && !toggleOn) {
      return '$120/yr';
    }
    if (selectedOption === 'Pro' && toggleOn) {
      return '$15/mo';
    } else if (selectedOption === 'Pro' && !toggleOn) {
      return '$150/yr'
    }
    console.log(total)
  }


  return (

    <div className='md:w-[451px] flex justify-center md:block'>

      {confirmation && (
        <div className='flex items-center justify-center flex-col w-11/12 mx-auto bg-white absolute top-[100px] md:static px-5 py-[100px] md:p-0 rounded-md drop-shadow-md md:drop-shadow-none'>
          <img src={confirmIcon} alt="thank you" />
          <h1 className=' text-marineBlue font-bold md:text-[30px] md:leading-[34px] mb-4 mt-8'>Thank you!</h1>
          <p className='text-base text-coolGray font-normal text-center leading-[155%]'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.<br/> Coded by <a href="https://www.frontendmentor.io/profile/Dytoma" style={{color: 'hsl(243, 100%, 62%)'}}>Dytoma</a>.</p>
        
        </div>
        )}

        {!confirmation && (
          <div>

            <div className='w-11/12 md:w-auto mx-auto bg-white absolute top-[100px] left-4 md:static p-5 md:p-0 rounded-md drop-shadow-md md:drop-shadow-none'>

              <div className='md:mb-10 mb-7'>
                <h1 className=' text-marineBlue font-bold md:text-[30px] md:leading-[34px] pb-3'>Finishing up</h1>
                <p className='text-base text-coolGray leading-[18px] font-normal'>Double-check everything looks OK before confirming.</p>
              </div>

              <div className=' py-[18px] pl-6 pr-5 rounded bg-magnolia'>

                <div className='flex justify-between items-center pb-6  border-b-coolGray border-b-2'>
                  <div>
                      <h3 className='text-base font-semibold text-marineBlue'>{`${selectedOption} (${toggleOn ? 'Monthly' : 'Yearly'})`}</h3>
                      <Link to="/plan">
                        <p className='text-coolGray font-normal text-[15px] underline'>Change</p>
                      </Link>
                  </div>
                  <div>
                    <h3 className='text-base font-semibold text-marineBlue'>{plan()}</h3>
                  </div>
                </div>

                <div className='space-y-5 mt-5'>
                  {iconChecked1 && (
                    <div className='flex items-center justify-between'>
                      <p className='text-coolGray font-normal text-[15px]'>Online service</p>
                      <p className='text-marineBlue font-normal text-[15px]'>{toggleOn ? '+$1/mo' : '+$10/yr'}</p>
                    </div>
                  )}
                  {iconChecked2 && (
                    <div className='flex items-center justify-between'>
                      <p className='text-coolGray font-normal text-[15px]'>Larger storage</p>
                      <p className='text-marineBlue font-normal text-[15px]'>{toggleOn ? '+$2/mo' : '+$20/yr'}</p>
                    </div>
                  )}
                  {iconChecked3 && (
                    <div className='flex items-center justify-between'>
                      <p className='text-coolGray font-normal text-[15px]'>Customizable profile</p>
                      <p className='text-marineBlue font-normal text-[15px]'>{toggleOn ? '+$2/mo' : '+$20/yr'}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className='pl-6 pr-5 flex justify-between mt-6 md:mb-[100px]'>
                <p className='text-coolGray font-normal text-[15px]'>Total (per {toggleOn ? "month" : "year"})</p>
                <p className='text-purplishBlue font-semibold text-base md:text-xl'>+${total}/{toggleOn ? 'mo' : 'yr'}</p>
              </div>

            </div>



            <div className='flex justify-between items-center fixed md:static bottom-0 left-0 right-0 h-[72px] p-4 md:p-0 bg-white mt-10 md:mt-0'>
              <Link to='/add-ons'>
                <button className='text-coolGray text-base font-medium hover:text-marineBlue transition-all duration-500 ease-in-out' onClick={() => {setPageActive('add-ons')}}>Go back</button>
              </Link>

              <button type='submit' className='bg-purplishBlue py-2 md:py-[15px] px-4 md:px-6 text-base md:text-xl text-magnolia rounded-lg hover:opacity-90 focus:opacity-90 transition-all duration-500 ease-in-out' onClick={confirmFunc}>Confirm</button>
            </div>
          </div>
        )}

    </div>
  )
}

export default Step4