import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import { TitleColorContext } from '../context/TitleColorContex';

const Contact = () => {
  const { counter } = useContext(CounterContext);
  const { titleColor } = useContext(TitleColorContext);
  return (
    <div>
      <h3 className="text-4xl" style={{ color: titleColor }}>
        Contact
      </h3>

      <div className='flex flex-col items-center justify-center text-5xl'>
        
        <h4>{counter}</h4>
      </div>
    </div>
  );
};

export default Contact;
