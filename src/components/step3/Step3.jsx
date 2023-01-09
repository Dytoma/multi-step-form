import {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Checkmark from '../../assets/icon-checkmark.svg';
import CheckmarkOff from '../../assets/icon-checkmark 2.svg';
import { AppContext } from '../../App';

import Option3 from './Option3';

const styleCheckOff = 'flex flex-row items-center py-3 px-3 md:py-5 md:px-6 border-2 border-coolGray rounded-lg w-full cursor-pointer';
const styleCheck = 'flex flex-row items-center py-3 px-3 md:py-5 md:px-6 border-2 border-pastelBlue bg-magnolia rounded-lg w-full cursor-pointer';

const Step3 = () => {
    const [addOnOnline, setAddOnOnline] = useState(0);
    const [addOnStorage, setAddOnStorage] = useState(0);
    const [addOnProfile, setAddOnProfile] = useState(0);


    const {iconChecked1, setIconChecked1, iconChecked2, setIconChecked2, iconChecked3, setIconChecked3, toggleOn, setTotal, planPrice, setPageActive} = useContext(AppContext);

    const calculation = () => {
    if (iconChecked1) {
      toggleOn ? setAddOnOnline(1) : setAddOnOnline(10);
    } else { setAddOnOnline(0)}
    if (iconChecked2) {
      toggleOn ? setAddOnStorage(2) : setAddOnStorage(20);
    } else { setAddOnStorage(0)}
    if (iconChecked3) {
      toggleOn ? setAddOnProfile(2) : setAddOnProfile(20);
    } else { setAddOnProfile(0)}

    setTotal(planPrice + addOnOnline + addOnStorage + addOnProfile);
  }
  useEffect(() => {
 
  calculation()
  })
  

    const check1 = () => {
        setIconChecked1(!iconChecked1);
    }
    const check2 = () => {
        setIconChecked2(!iconChecked2);
    }
    const check3 = () => {
        setIconChecked3(!iconChecked3);
    }
  return (
    <div className='w-[451px]'>

        <div className='flex md:block'>
            <div className='w-11/12 md:w-full absolute mx-auto left-0 right-0 top-[100px] md:static p-5 md:p-0 rounded-md bg-white drop-shadow-md md:drop-shadow-none'>

                <div className='md:mb-10 mb-7'>
                    <h1 className=' text-marineBlue font-bold md:text-[30px] md:leading-[34px] pb-3'>Pick add-ons</h1>
                    <p className='text-base text-coolGray leading-[18px] font-normal'>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className='space-y-4 md:mb-20'>
                    <div className='w-full' onClick={check1}>
                        <Option3 checked={ iconChecked1 ? Checkmark : CheckmarkOff } option="Online service" description="Access to multiple player games" bundle={toggleOn ? 1 : 10} time={toggleOn ? 'mo' : 'yr'} styleChecked={iconChecked1 ? styleCheck: styleCheckOff}/>
                    </div>
                    <div className='w-full' onClick={check2}>
                        <Option3 checked={ iconChecked2 ? Checkmark : CheckmarkOff } option="Larger Storage" description="Extra 1TB of cloud save" bundle={toggleOn ? 2 : 20} time={toggleOn ? 'mo' : 'yr'} styleChecked={iconChecked2 ? styleCheck: styleCheckOff}/>
                    </div>
                    <div className='w-full' onClick={check3}>
                        <Option3 checked={ iconChecked3 ? Checkmark : CheckmarkOff } option="Customizable profile" description="Custom theme on your profile" bundle={toggleOn ? 2 : 20} time={toggleOn ? 'mo' : 'yr'} styleChecked={iconChecked3 ? styleCheck: styleCheckOff}/>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='flex justify-between items-center fixed md:static bottom-0 left-0 right-0 h-[72px] p-4 md:p-0 bg-white mt-10 md:mt-0'>
            <Link to='/plan'>
            <button className='text-coolGray text-base font-medium hover:text-marineBlue transition-all duration-500 ease-in-out' onClick={() => {setPageActive('plan')}}>Go back</button>
            </Link>
            <Link to='/summary'>
            <button type='submit' className='bg-marineBlue py-2 md:py-[15px] px-4 md:px-6 text-base md:text-xl text-magnolia rounded-lg hover:opacity-90 focus:opacity-90 transition-all duration-500 ease-in-out' onClick={() => {setPageActive('summary')}}>Next Step</button>
            </Link>
        </div>

    </div>
  )
}

export default Step3