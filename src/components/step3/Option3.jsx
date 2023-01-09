import React from 'react'

const Option3 = ({checked, option, description, bundle, time, styleChecked}) => {
  return (
    <div className={styleChecked}>
        <div>
            <img src={checked} alt="" />
        </div>
        <div className='ml-6 flex items-center w-full justify-between'>
            <div>
                <h3 className='md:text-base text-sm font-semibold text-marineBlue'>{option}</h3>
                <p className='md:text-base text-sm font-normal text-coolGray'>{description}</p>
            </div>
            <div><p className='md:text-sm text-xs text-purplishBlue font-normal'>+${bundle}/{time}</p></div>
        </div>
    </div>
  )
}

export default Option3