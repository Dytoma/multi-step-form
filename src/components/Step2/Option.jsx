import React from 'react'

const Option = ({ image, description, price, duration, handleClick, id, activeState, bonus }) => {
  return (
    <div className={activeState} onClick={handleClick} id={id}>
        <img src={image} alt="" aria-hidden="true" className='md:mb-11 w-10 h-10'/>
        <div>
          <h3 className=' text-marineBlue text-base font-medium tracking-[0.005rem]'>{description}</h3>
          <p className='text-coolGray text-base font-normal -tracking-[0.065rem]'>${price}/{duration} </p>
          <p className='text-marineBlue text-sm font-medium -tracking-[0.065rem]'>{bonus}</p>
        </div>
    </div>
  )
}

export default Option