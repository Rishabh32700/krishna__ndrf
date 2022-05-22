import React from 'react'

const OngoingCases = () => {

    const data =[
        {
          heading: 'Gas Leakage',
          details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, officia!',
          location: 'sultanpur',
          date: 'april 2022'
        },
        {
          heading: 'Flood',
          details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, officia!',
          location: 'vasant Kunj',
          date: 'april 2022'
        },
        {
          heading: 'Earthquake',
          details: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, officia!',
          location: 'rohini',
          date: 'april 2022'
        },
      ]
      
  return (
    <>
        <div className="ongoing__cases">
        {data.map((data)=> (
        <div className="case__reported__container">
          <h1>{data.heading}</h1>
          <p>{data.details}</p>
          <div className="place__time">
            <span className='place' >{data.location}</span>
            <span className="date">{data.date}</span>
          </div>
        </div>
        ))}
        </div>
    </>
  )
}

export default OngoingCases