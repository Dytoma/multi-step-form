import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Step1, Steps, Step2, Step3, Step4 } from './components';

export const AppContext = createContext(null);

const App = () => {
  const [iconChecked1, setIconChecked1] = useState(false);
  const [iconChecked2, setIconChecked2] = useState(false);
  const [iconChecked3, setIconChecked3] = useState(false);
  const [toggleOn, setToggleOn] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Arcade");
  const [planPrice, setPlanPrice] = useState(9);
  const [total, setTotal] = useState(9);
  const [pageActive, setPageActive] = useState('info');


  const value = {
    iconChecked1,
    setIconChecked1,
    iconChecked2,
    setIconChecked2,
    iconChecked3,
    setIconChecked3,
    toggleOn,
    setToggleOn,
    selectedOption,
    setSelectedOption,
    planPrice,
    setPlanPrice,
    total,
    setTotal,
    pageActive,
    setPageActive
  }
  


  return (
    <Router>
      <div className='App font-ubuntu text-lg md:flex items-center justify-center min-h-screen bg-magnolia'>
          <main className='w-full h-[761px] md:w-[939px] md:h-[602px] md:rounded-[22px] md:py-4 md:pl-4 md:pr-[99px] md:flex md:space-x-[100px] items-center md:bg-white relative'>
                <AppContext.Provider value={value}>
                  <Steps />
                  <Routes>
                      <Route path='/' element={<Step1 />} />
                      <Route path='/plan' element={<Step2 />} />
                      <Route path='/add-ons' element={<Step3 />}/>
                      <Route path='/summary' element={<Step4 />}/>
                  </Routes>
                </AppContext.Provider>
          </main>
      </div>
    </Router>
  )
}

export default App