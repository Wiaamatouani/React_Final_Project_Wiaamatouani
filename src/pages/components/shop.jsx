import React, { useState } from 'react';
import { useNavigate,  } from 'react-router-dom';
import data from "../../json/product.json";

import image from '../../constant/image';
// import { images } from '../../constant';
const Shop = () => {
  const navigate=useNavigate()
  const [selectedDropdownType, setSelectedDropdownType] = useState("All");
  const [selectedCheckboxTypes, setSelectedCheckboxTypes] = useState([])
  const [sortOption, setSortOption] = useState("Featured");
  const handleDropdownChange = (e) => {
      setSelectedDropdownType(e.target.value);
  };

  const handleCheckboxChange = (e) => {
      const { value, checked } = e.target;
      if (checked) {
          setSelectedCheckboxTypes([...selectedCheckboxTypes, value]);
      } else {
          setSelectedCheckboxTypes(selectedCheckboxTypes.filter((type) => type !== value));
      }
  };

  let filteredData = data;

  if (selectedDropdownType !== "All") {
      filteredData = filteredData.filter(product => product.type === selectedDropdownType);
  }

  if (selectedCheckboxTypes.length > 0) {
      filteredData = filteredData.filter(product => selectedCheckboxTypes.includes(product.type));
  }

  const limitedData = filteredData.slice(0, 6);
  const handleSortChange = (e) => {
      setSortOption(e.target.value);
  };
 
  return (
    <div>
      <div>
        <img src={Shop} alt="" />
      </div>







      
                <div className=' inset-0 bg-black opacity-50' ></div>

                <p className='text-[50px] text-white font-bold text-center relative'>
                    Products
                </p>
            

            <div className='flex gap-x-7 items-center justify-center mt-5'>
                <select
                    name="first"
                    id="first"
                    className='py-4 border-2 w-[200px] border-black'
                    value={selectedDropdownType}
                    onChange={handleDropdownChange}
                >
                    <option className='font-light ' value="All">All products</option>
                    <option value="new">New</option>
                    <option value="sold">Sold</option>
                    <option value="on stock">On Stock</option>
                </select>

              
      
            </div>

            <div className='flex gap-x-14  mt-4 '>

                <div className='flex flex-col mr-10 ml-3 gap-y-5'>
                <div className='flex-col p-4 flex'>
            <h1 className='font-bold p-4 text-3xl '>Categories</h1>
            <h1 className='font-light p-3'>Best Seller (8 items)</h1>
            <h1 className='font-light p-3'>Featured (8 items)</h1>
            <h1 className='font-light p-3'>Men (8 items)</h1>
            <h1 className='font-light p-3'>Women (8 items)</h1>
          </div>
          <div className='flex-col p-4 flex'>
            <h1 className='font-bold  p-4 text-3xl'>Pice</h1>
            <h1 className=' font-light p-3'><input type="checkbox"  value="new"
                                    onChange={handleCheckboxChange}  id="" /> blaack</h1>
            <h1 className='font-light p-3'><input type="checkbox"  value="new"
                                    onChange={handleCheckboxChange} id="" /> gray</h1>
            <h1 className='font-light p-3'><input type="checkbox"  value="new"
                                    onChange={handleCheckboxChange} id="" /> red</h1>
          </div>
          <div className='flex-col  p-4 flex'>
            <h1 className='font-bold  p-4 text-3xl'>Size</h1>
            <h1 className='font-light p-3'><input type="checkbox" id="" /> L</h1>
            <h1 className='font-light p-3'><input type="checkbox" id="" /> M</h1>
            <h1 className='font-light p-3'><input type="checkbox" id="" />S</h1>
            <h1 className='font-light p-3'><input type="checkbox" id="" />XL</h1>
          </div>
<input className='p-4 ml-10 font-light border w-[20vw]' type="text" placeholder='Search' />
                  

                    
                </div>

                <div className='ml-10 flex flex-wrap'>
                    {limitedData.map((e, i) => (
                        <div key={i} className="p-2 w-[30%]">
                            <img src={image[e.img]} alt={e.title} className="w-[80%] h-auto" />
                            <h1 className=' cursor-pointer'  onClick={() => { navigate(`/details/${e.id}`) }}>{e.title}</h1>
                            <p>{e.price}</p>
                            <p>{e.type}</p>
                        </div>
                    ))}
                </div>
            
            </div>
                     <div className='flex items-center justify-center gap-x-9'>
                    <button className='bg-black text-white rounded-full w-10 p-2 px-4' onClick={()=>navigate("/shop")}>1</button>
                    <button className=' bg-white text-black hover:bg-black hover:text-white rounded-full w-10 p-2 px-4' onClick={()=>navigate("/shop2")}>2</button>
                    </div>





      <div>
        <div className='flex flex-col gap-6 p-20'>
          
          <div className='flex-col p-4 flex'>
            <h1 className='font-bold  p-4 text-3xl'>Pice</h1>
            <h1 className=' font-light p-3'><input type="checkbox" name="salam" id="" /> blaack</h1>
            <h1 className='font-light p-3'><input type="checkbox" name="salam" id="" /> gray</h1>
            <h1 className='font-light p-3'><input type="checkbox" name="salam" id="" /> red</h1>
          </div>
          <div className='flex-col  p-4 flex'>
            <h1 className='font-bold  p-4 text-3xl'>Size</h1>
            <h1 className='font-light p-3'><input type="checkbox" id="" /> L</h1>
            <h1 className='font-light p-3'><input type="checkbox" id="" /> M</h1>
            <h1 className='font-light p-3'><input type="checkbox" id="" />S</h1>
            <h1 className='font-light p-3'><input type="checkbox" id="" />XL</h1>
          </div>
          <input className='p-4 ml-10 font-light border w-[20vw]' type="text" placeholder='Search' />
        </div>
        <div>

       


        </div>

      

      </div>
      



          













     







          

  <footer className="bg-[#f0f0f0]">
    <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 mt-[7vh]  py-10 md:grid-cols-2 xl:flex justify-around xl:px-10 ">
      <div className="max-w-sm">
        <div className="mb-6 flex h-12 items-center space-x-2">
          <span className="text-base font-semibold">GET IN TOUCH</span>
        </div>
        <div className="text-gray-500">
          Any questions? Let us know in store at 8th floor, 379 Hudson St, New
          York, NY 10018 or call us on (+1) 96 716 6879
        </div>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-semibold xl:mb-4 text-base ">
          CATEGORIES
        </div>
        <nav aria-label="Footer Navigation" className="text-gray-500">
          <ul className="space-y-3">
            <li>
              <a className="hover:text-[#e4553f] " href="#">
                Men
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f] " href="#">
                Women
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f] " href="#">
                Dresses
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f] " href="#">
                Sunglasses
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className="mt-4 mb-2  text-base font-semibold xl:mb-4">Links</div>
        <nav aria-label="Footer Navigation" className="text-gray-500">
          <ul className="space-y-3">
            <li>
              <a className="hover:text-[#e4553f]" href="#">
                Search
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f]" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f]" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f]" href="#">
                Returns
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-[15vw]">
        <div className="mt-4 mb-2  text-base font-semibold xl:mb-4">HELP</div>
        <nav aria-label="Footer Navigation" className="text-gray-500">
          <ul className="space-y-3">
            <li>
              <a className="hover:text-[#e4553f]" href="#">
                Track Order
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f]" href="#">
                Returns
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f]" href="#">
                Shipping
              </a>
            </li>
            <li>
              <a className="hover:text-[#e4553f]" href="#">
                FAQs
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="">
        <div className="mt-4 mb-2 font-medium xl:mb-4">
          Subscribe to our Newsletter
        </div>
        <div className="flex flex-col">
          <div className="mb-4">
            <input
              type="email"
              className="focus:outline mb-2 block h-14 text-base font-light border-b-2 w-full bg-[#f0f0f0]  px-4 sm:w-80 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter your email"
            />
            <button className="block rounded-full mt-5 bg-black px-11 py-3 font-medium text-white hover:bg-[#e4553f] duration-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#f0f0f0]">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-center sm:text-left ">
        <div className="">
          Copyright Â© 2022 Shopify Theme Developed by MassTechnologist All
          rights reserved.
        </div>
      </div>
    </div>
  </footer>
          
        </div >
    );
};

export default Shop;