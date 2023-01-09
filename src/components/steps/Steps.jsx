import React, { useContext } from 'react';
import { AppContext } from '../../App';
import './steps.css';

const inactiveBtn = 'w-[34px] h-[34px] rounded-full border-2 border-lightGray text-white font-ubuntu font-medium text-base leading-[18px]';
const activeBtn = 'w-[34px] h-[34px] rounded-full bg-lightBlue text-marineBlue font-ubuntu font-medium text-base leading-[18px]';
const stepNumber = 'font-ubuntu text-xs font-normal leading-4 text-lightGray';
const stepDesc = 'font-ubuntu text-base font-medium leading-[18px] text-white';

const Steps = () => {

  const {pageActive} = useContext(AppContext);

  return (
    <div className='steps w-full md:w-[274px] md:h-full md:pt-[39px] md:pl-[32px] flex md:flex-col md:space-y-[30px] h-[172px] space-x-5 justify-center pt-8 md:space-x-0 md:justify-start'>
    
      <div className="flex md:space-x-[14px]">
        <button className={pageActive === "info" ?  activeBtn : inactiveBtn}>1</button>
        <div className='hidden md:block'>
          <p className={stepNumber}>STEP 1</p>
          <h2 className={stepDesc}>YOUR INFO</h2>
        </div>
      </div>
      <div className="flex space-x-[14px]">
        <button className={pageActive === "plan" ?  activeBtn : inactiveBtn}>2</button>
        <div className='hidden md:block'>
          <p className={stepNumber}>STEP 2</p>
          <h2 className={stepDesc}>SELECT PLAN</h2>
        </div>
      </div>
      <div className="flex space-x-[14px]">
        <button className={pageActive === "add-ons" ?  activeBtn : inactiveBtn}>3</button>
        <div className='hidden md:block'>
          <p className={stepNumber}>STEP 3</p>
          <h2 className={stepDesc}>ADD-ONS</h2>
        </div>
      </div>
      <div className="flex space-x-[14px]">
        <button className={pageActive === "summary" ?  activeBtn : inactiveBtn}>4</button>
        <div className='hidden md:block'>
          <p className={stepNumber}>STEP 4</p>
          <h2 className={stepDesc}>SUMMARY</h2>
        </div>
      </div>

    </div>
  )
}

export default Steps