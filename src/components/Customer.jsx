

import React from 'react';

function Customer({ customerData, onTicketClick }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-black">Customer Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {customerData.map((customer) => (
          <div 
            key={customer.id} 
            onClick={() => onTicketClick(customer)}
            className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition duration-200 ease-in-out"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {customer.title}
              </h3>
              <span 
                className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap ${
                  customer.status === 'Open' ? 'bg-green-100 text-green-700' : 
                  customer.status === 'In-Progress' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {customer.status}
              </span>
            </div>
            
            <p className="text-sm text-gray-600 mb-4">
              {customer.description}
            </p>

            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
              <div className="flex items-center space-x-3">
                <p className="font-bold text-gray-500">
                  #{customer.id.replace('#', '')}
                </p>
                <p 
                  className={`font-bold ${
                    customer.priority === 'HIGH PRIORITY' ? 'text-red-500' : 
                    customer.priority === 'MEDIUM PRIORITY' ? 'text-yellow-600' : 
                    'text-green-500'
                  }`}
                >
                  {customer.priority}
                </p>
              </div>

              <div className="flex items-center space-x-3 text-gray-500">
                <p>{customer.assignee}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>{customer.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Customer;





























