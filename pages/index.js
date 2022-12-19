import Data from '../data.json'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [topic, setTopics] = useState([])
  const [testList, setTestList] = useState([])
  const [todayNews, setTodayNews] = useState([])
  const [moreLinks, setMoreLinks] = useState([])
  const [activeTopic, setActiveTopic] = useState(0)

  useEffect(() => {
    if (Data) {
      const { topics, testList, todayNews, moreLinks } = Data?.data
      setTopics(topics);
      setTestList(testList);
      setTodayNews(todayNews)
      setMoreLinks(moreLinks);
    }
  }, [Data])

  const handleTestList = (index, tName) => {
    setActiveTopic(index)
    const data = Data?.data.testList;
    tName === 'All' ? setTestList(data) : setTestList(data.filter((item) => item.topic === tName));
  }


  return (
    <div className='container mx-auto my-10 lg:space-x-8 lg:px-5 max-lg:px-3'>
      <div className='lg:flex lg:flex-row'>
        <div className='basis-3/4'>
          <ul className='flex  items-center space-x-2 px-4  overflow-auto  scrollbar-hide '>
            {topic.map((tName, index) => {
              return <li key={index} onClick={() => handleTestList(index, tName)} className={`${index === activeTopic ? '!bg-[#1565D8] !border !border-[#1565D8] text-white ' : ''}bg-white cursor-pointer min-w-fit  text-[11px] font-[600] py-[5px] px-[16px] border rounded-full border-black`}>{tName}</li>
            })}
          </ul>
          <div className='space-y-5'>
            <div className='grid md:grid-cols-2 mt-10 gap-8 max-h-[1200px] overflow-auto lg:px-5 lg:py-3'>
              {testList.map((test, index) => {
                return <div key={index} className='cursor-pointer bg-white max-h-min rounded-lg shadow-[0_20px_40px_-14px_rgb(0,0,0,0.25)] p-3 hover:scale-105 hover:duration-700'>
                  <div className='font-semibold mb-1'>
                    <h2>{test?.name}</h2>
                  </div>
                  <div className='text-sm space-y-5'>
                    <p >{test?.description}</p>
                    <p>{test?.topic}</p>
                  </div>
                  <div className='flex justify-between items-center mt-4'>
                    <p >{test?.date} <span className='font-[cursive] rounded-[2px] text-white text-[11px] p-[3px] bg-[#F34D4A]'>IMP</span></p>
                    <p className='text-[#36B37E] flex items-center space-x-1'><img src={'/assets/download-icons.svg'} alt="download-icos" /> <span>Download</span></p>
                  </div>
                </div>
              })}
            </div>
            <div className='lg:mx-6'>
              <button className='w-full text-white bg-[#1583cc] p-1 rounded-md '>Load More</button>
            </div>
          </div>
        </div>
        <div className='basis-1/4 mt-5 space-y-6 shadow-sm  lg:p-3 flex flex-col'>
          <div className='bg-white space-y-2 shadow-sm p-2'>
            <div className='bg-[#36B37E] w-full p-1 '>
              <h3 className='text-white font-bold flex items-center space-x-2'>
                <img src={'assets/resource-side-heading-icons.svg'} alt="icons" />
                <span className='text-[18px] font-bold'>Today News</span>
              </h3>
            </div>
            <ul className='pb-[15px]'>
              {todayNews.map((data, index) => {
                return <li className='text-[12px] border-b border-b-[#B3BAC5] py-[8px]' key={index}>
                  <a className='text-[#2199e8] font-bold' href='#'>{data?.topic}</a>
                  <p>{data?.date}</p>
                </li>
              })}
            </ul>
          </div>
          <div className='bg-white space-y-2 shadow-sm p-2'>
            <div className='bg-[#1565D8] w-full p-1 '>
              <h3 className='text-white font-bold flex items-center space-x-2'>
                <img src={'assets/resource-side-heading-icons.svg'} alt="icons" />
                <span className='text-[18px] font-bold'>More Links</span>
              </h3>
            </div>
            <ul className='pb-[15px]'>
              {moreLinks.map((data, index) => {
                return <li className='text-[12px] border-b border-b-[#B3BAC5] py-[8px]' key={index}>
                  <a className='text-[#2199e8] font-bold' href='#'>{data?.topic}</a>
                </li>
              })}
            </ul>
          </div>
          <div className='max-lg:flex max-lg:justify-center max-lg:space-x-4 max-md:mx-20'>
            <img src={'/assets/image1.png'} alt="image1" />
            <img src={'/assets/image2.png'} alt="image2" />
          </div>
        </div>
      </div>
      <div>
        <div >
          <h2 className='text-3xl font-bold py-2'>Latest Coures</h2>
          <div className='flex flex-row space-x-4'>
            {todayNews.slice(1).map((news, index) => {
              return <div key={index} className='border rounded-md p-4 space-y-2'>
                <div className='flex items-center space-x-4 text-white text-xs'>
                  <button className='bg-[#5bd3c7] max-w-[135px] w-full p-[5px]  rounded-md'>Offline</button>
                  <button className='bg-[#00a6de] max-w-[135px] w-full p-[5px]  rounded-md'>Orai</button>
                </div>
                <div className='text-xs font-semibold space-y-3'>
                  <div className='leading-8 border-b-2 border-b-[#B3BAC5] py-2'>
                    <p>SSC - Neptune (NK-A7)</p>
                    <p>1596 | SSC | Classroom | English and Hindi</p>
                  </div>
                  <div className='leading-5'>
                    <p className='text-[#818181]'>10 January, 2023</p>
                    <p className='space-x-2 text-[#000033] '>Fee - &#8377; 8000 <del className='text-[#818181]'>&#8377; 10000</del><span className='text-[#3adb76]'>20.00 % off</span></p>
                  </div>
                </div>
                <div className='flex items-center space-x-4 text-sm font-semibold'>
                  <button className='text-[#333333] max-w-[135px] border border-black w-full py-[5px] rounded-md'>DETAILS</button>
                  <button className='bg-[#3adb76] max-w-[135px] w-full py-[5px] text-white  rounded-md'>BY NOW</button>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
