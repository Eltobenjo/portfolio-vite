import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    dates: "1995-1999",
    company: "SA Navy",
    title: "Leading Seaman",
    details: "yada yada yada yada yada yada yada y",
  },

  {
    dates: "2000 - 2001",
    company: "jacopieve",
    title: "Farm Hand",
    details: "yada yada yada yada yada yada yada y",
  },
  {
    dates: "2001 - 2003",
    company: "Fox Pubs",
    title: "Manager",
    details: "yada yada yada yada yada yada yada y",
  },
  {
    dates: "2004 - 2016",
    company: "Oreillys",
    title: "Manager",
    details: "yada yada yada yada yada yada yada y",
  },
];

const Work = () => {
  return (
    <div id='resume' className='max-w[1040] m-auto md:pt-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
{data.map((item, idx)=>(
  <WorkItem key= {idx} dates={item.dates}  company={item.company} title={item.title} details={item.details}/>

))}

    </div>
  )
}

export default Work