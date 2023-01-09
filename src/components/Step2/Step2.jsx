import React, { useContext } from 'react';
import Option from './Option';


import arcadeLogo from "../../assets/icon-arcade.svg";
import advancedLogo from "../../assets/icon-advanced.svg";
import proLogo from "../../assets/icon-pro.svg";
import ToggleOn from "../../assets/toggle btn on.svg";
import ToggleOff from "../../assets/toggle btn.svg";
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const durationStyle = 'text-coolGray text-base font-medium -tracking-[0.065rem]';
const durationStyleActive = 'text-marineBlue text-base font-medium -tracking-[0.065rem]';
const optionNullState = 'p-4 flex space-x-4 md:space-x-0 md:flex-col border-2 border-coolGray hover:border-pastelBlue transition-all duration-300 ease-in-out w-full rounded-lg cursor-pointer mb-4 md:mb-0';
const optionActiveState = 'p-4 flex space-x-4 md:space-x-0 md:flex-col mb-4 md:mb-0 border-2 border-pastelBlue hover:border-pastelBlue transition-all duration-300 ease-in-out w-full rounded-lg cursor-pointer bg-alabaster';

// const transition = ' transition-all duration-500 ease-in-out';

const Step2 = () => {
  // const [toggleOn, setToggleOn] = useState(true);
  // const [selectedOption, setSelectedOption] = useState("Arcade");

  const {toggleOn, setToggleOn, selectedOption, setSelectedOption, setPlanPrice, setPageActive} = useContext(AppContext)

  const click = () => {
    setToggleOn(!toggleOn);
    // toggleOn ? period = "mo" : period = "yr";
  }


  const handleSelection = (e) => {
    console.log(e.target.id)
    if (parseFloat(e.target.id) === 9 || parseFloat(e.target.id) === 90) {
        toggleOn ? setPlanPrice(9) : setPlanPrice(90);
        setSelectedOption("Arcade");
    }
    if (parseFloat(e.target.id) === 12 || parseFloat(e.target.id) === 120) {
      toggleOn ? setPlanPrice(12) : setPlanPrice(120);
        setSelectedOption("Advanced");
    }
    if (parseFloat(e.target.id) === 15 || parseFloat(e.target.id) === 150) {
      toggleOn ? setPlanPrice(15) : setPlanPrice(150);
        setSelectedOption("Pro");
    }
  }
  return (
    <div className='md:w-[451px] flex justify-center md:block'>

      <div className='w-11/12 md:w-full absolute top-[100px] md:static p-5 md:p-0 rounded-md bg-white drop-shadow-md md:drop-shadow-none'>
        <div className='md:mb-10 mb-7'>
          <h1 className=' text-marineBlue font-bold md:text-[30px] md:leading-[34px] pb-3'>Select your plan</h1>
          <p className='text-base text-coolGray leading-[18px] font-normal'>You have the option of monthly or yearly billing.</p>
        </div>

        {/* Handling the changing of style of each option */}

        <div className='flex flex-col md:flex-row md:space-x-[18px]  md:mb-8'>
          <Option image={arcadeLogo} description="Arcade" price={toggleOn ? "9" : "90"} duration={toggleOn ? "mo" : "yr"} handleClick={handleSelection} id={toggleOn ? "9" : "90"} activeState={selectedOption === 'Arcade' ? optionActiveState : optionNullState} bonus={!toggleOn && "2 months for free"}/>
          <Option image={advancedLogo} description="Advanced" price={toggleOn ? "12" : "120"} duration={toggleOn ? "mo" : "yr"} handleClick={handleSelection} id={toggleOn ? "12" : "120"} activeState={selectedOption === 'Advanced' ? optionActiveState : optionNullState} bonus={!toggleOn && "2 months for free"}/>
          <Option image={proLogo} description="Pro" price={toggleOn ? "15" : "150"} duration={toggleOn ? "mo" : "yr"} handleClick={handleSelection} id={toggleOn ? "15" : "150"} activeState={selectedOption === 'Pro' ? optionActiveState : optionNullState} bonus={!toggleOn && "2 months for free"}/>
        </div>

        <div>
          <button className='flex w-full bg-alabaster justify-center py-3 rounded-lg space-x-6 items-center md:mb-[117px]'>
            <p className={toggleOn ? durationStyleActive : durationStyle}>Monthly</p>
            <div onClick={click}>
              {toggleOn ? <img src={ToggleOn} alt="monthly" /> : <img src={ToggleOff} alt='yearly' /> }
            </div>
            <p className={toggleOn ? durationStyle: durationStyleActive}>Yearly</p>
          </button>
        </div>

      </div>

      <div className='flex justify-between items-center fixed md:static bottom-0 left-0 right-0 h-[72px] p-4 md:p-0 bg-white mt-10 md:mt-0'>
        <Link to='/'>
          <button className='text-coolGray text-base font-medium hover:text-marineBlue transition-all duration-500 ease-in-out' onClick={() => {setPageActive('info')}}>Go back</button>
        </Link>
        <Link to='/add-ons'>
          <button type='submit' className='bg-marineBlue py-2 md:py-[15px] px-4 md:px-6 text-base md:text-xl text-magnolia rounded-lg hover:opacity-90 focus:opacity-90 transition-all duration-500 ease-in-out' onClick={() => {setPageActive('add-ons')}}>Next Step</button>
        </Link>
      </div>

    </div>
  )
}

export default Step2