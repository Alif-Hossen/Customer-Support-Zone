

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Customer from './components/Customer';
import TaskStatus from './components/TaskStatus'; 
import Footer from './components/Footer';

function App() {
  const [customers, setCustomers] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [inProgressTasks, setInProgressTasks] = useState([]);

  useEffect(() => {
    fetch('/customers.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCustomers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleTicketClick = (customer) => {
    alert(`You Are Starting - "${customer.title}"`);
    
    setInProgressCount(prev => prev + 1);
    
    const newTask = { ...customer, uniqueId: Date.now() + Math.random() };
    setInProgressTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleCompleteTask = (uniqueId) => {
    setResolvedCount(prev => prev + 1);
    setInProgressCount(prev => Math.max(0, prev - 1));
    
    setInProgressTasks(prevTasks => prevTasks.filter(task => task.uniqueId !== uniqueId));
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      
      <Navbar />

      <Banner 
        inProgress={inProgressCount} 
        resolved={resolvedCount} 
      />

      <div className="max-w-[1320px] mx-auto px-4 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2">
          <Customer 
            customerData={customers} 
            onTicketClick={handleTicketClick} 
          />
        </div>

        <div className="lg:col-span-1">
          <TaskStatus 
            inProgressTasks={inProgressTasks} 
            onComplete={handleCompleteTask} 
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;















