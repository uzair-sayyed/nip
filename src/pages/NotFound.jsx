import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }} className='h-[70vh]'>
      <div className='flex flex-col items-center justify-center h-full pb-20'>
        <h1 className='text-5xl'>404</h1>
        <p className='text-xl mt-4'>Sorry, the page you're looking for doesn't exist.</p>
        <p className='text-xl'>Redirecting to the homepage in 5 seconds...</p>
      </div>
    </div>
  );
};

export default NotFound;
