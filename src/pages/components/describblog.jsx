import React from 'react';
import Blog1 from "../../assets/images/blog-01.jpg"
import Blog2 from "../../assets/images/blog-02.jpg"
import Blog3 from "../../assets/images/blog-03.jpg"
import image from '../../constant/image';
import data from "../../json/product.json"
import { useNavigate } from 'react-router-dom';

const Describblog = () => {
    let navigate = useNavigate()
    return (
        
<div>
<div className='flex-row flex gap-3'>
            <div className='flex-col pt-16 pl-32'>
                <div >
                   

                    <h1 className='text-3xl p-5   hover:text-red-700 font-normal'>The White Sneakers Nearly Every Fashion Girls Own</h1>
                    <p className='font-light pl-6  text-[#97888f]'>by fashe-theme Admin |
                        <span className='text-[#666666]   hover:text-red-700 font-normal'>crafts, street style</span>  |
                        0 Comments</p>
                    <p className='text-[#97888f]  pl-6 p-4 w-[50vw]'>
                        Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
                    </p>
                    <h1 className=' pl-6  w-[55vw] pb-14 text-[#97888f] text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet tempor magna. Donec eros sem, porta eget leo et, varius eleifend mauris. Donec eu leo congue, faucibus quam eu, viverra mauris. Nulla consectetur lorem mi, at scelerisque metus hendrerit vitae. Proin vel magna vel neque porta ultricies non eget mauris. Suspendisse potenti.

                        Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis, vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare ornare libero.
                    </h1>
                </div>
                <div><div className='overflow-hidden w-[55vw]'>
                    <img onClick={() => { navigate("/describlog") }} className='w-[100%] h-[100%] hover:scale-110 duration-500 ' src={Blog2} alt="" />
                </div>
                    <h1 className='text-3xl p-5 hover:text-red-700 font-normal'>The White Sneakers Nearly Every Fashion Girls Own</h1>
                    <p className='font-light pl-6  text-[#97888f]'>by fashe-theme Admin |
                        <span className='text-[#666666]  hover:text-red-700 font-normal'>crafts, street style</span>  |
                        0 Comments</p>
                    <p className='text-[#97888f]  pl-6 p-4 w-[50vw]'>
                        Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
                    </p>
                    <h1 className=' pl-6  w-[55vw] pb-14 text-[#97888f] text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet tempor magna. Donec eros sem, porta eget leo et, varius eleifend mauris. Donec eu leo congue, faucibus quam eu, viverra mauris. Nulla consectetur lorem mi, at scelerisque metus hendrerit vitae. Proin vel magna vel neque porta ultricies non eget mauris. Suspendisse potenti.

                        Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis, vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare ornare libero.
                    </h1>
                </div>
                <div>
                    <div className='overflow-hidden w-[55vw]'>
                        <img onClick={() => { navigate("/describlog") }} className='w-[100%] h-[100%] hover:scale-110 duration-500 ' src={Blog3} alt="" />
                    </div>
                    <h1 className='text-3xl p-5 font-normal hover:text-red-700'>The White Sneakers Nearly Every Fashion Girls Own</h1>
                    <p className='font-light pl-6  text-[#97888f]'>by fashe-theme Admin |
                        <span className='text-[#666666] font-normal  hover:text-red-700'>crafts, street style</span>  |
                        0 Comments</p>
                    <p className='text-[#97888f]  pl-6 p-4 w-[50vw]'>
                        Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames
                    </p>
                    <h1 className=' pl-6  w-[55vw] pb-14 text-[#97888f] text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit amet tempor magna. Donec eros sem, porta eget leo et, varius eleifend mauris. Donec eu leo congue, faucibus quam eu, viverra mauris. Nulla consectetur lorem mi, at scelerisque metus hendrerit vitae. Proin vel magna vel neque porta ultricies non eget mauris. Suspendisse potenti.

                        Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis, vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare ornare libero.
                    </h1>
                </div>



               
            </div >






            <div className='flex-col'>
                <input type="text" className='p-4 m-12 ml-14 font-light text-gray-500 border rounded-full w-[18vw] flex h-[6vh]' placeholder='Search all articles... ' />
                <div className=' p-4 m-16 ml-14  h-[80vh]'>
                    <p className='text-[#333] text-[22px] font-extrabold  pb-10 '>Featured Products</p>

                    <div className='flex flex-col gap-8 '>
                        {
                            data.slice(0, 5).map((e) => (
                                <div className='w-[100%] flex gap-8 pb-8 '>
                                    <div className='w-[30%]'>
                                        <img src={image[e.img]} alt="" className='w-[100%]' />
                                    </div>
                                    <div>
                                        <p className='text-[#555] pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer'>{e.name}</p>
                                        <p className='text-[#555] text-[13px] pb-2'>${e.price}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>


                    <p className='text-[#333] text-[22px] font-extrabold pt-10 pb-10 '>Tags Cloud</p>
                    <div className='flex gap-3'>
                        <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>crafts</button>
                        <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>street style</button>

                    </div>







                </div>
            </div>


        </div>

       
       

         <div className='flex-col p-6 ml-14 '>

             <h1 className='text-3xl font-bold'>1 comment to show</h1>
             <div className='flex-row flex p-4  '>
                 <div className="h-8 w-8 p-8 mr-3 rounded-full bg-black"></div>

                 <div className='  flex-col '> 
                     <div className='flex'>
                <h1 className='font-normal hover:text-red-700 text-gray-600'> test name </h1>
                     <p className='font-light'> / Jan 11, 2018 Reply</p>
                     </div>
                 <div>
                    <p>test message</p></div>
                     </div>

             </div>

         </div>
         <div className='flex-col  ml-12 p-8'> 

         <div className=' flex gap-5 ml-14 '>  
         <p className=' text-[#392f34]  text-l font-light p-2 '>

         Tags Cloud</p>

         <button className='border  border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>crafts</button>
         <button className='border  border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>street style
            
         </button>
         
        
         </div>


             <div className='p-3 '>
             <h1 className='text-3xl font-semibold ml-14'>LEAVE A COMMENT </h1>
             <p className='pt-3 ml-14 font-light text-gray-400'>Your email address will not be published. Required fields are marked *</p>
             </div>
              <div className='flex-col ml-8 '>
              <textarea name="" placeholder='Leave a message' className='w-[40vw] p-4 ml-10 mb-3 font-light h-[20vh] border' id=""></textarea>
              <div className='flex-col flex gap-4'> <input type="text" placeholder='Your Name 'className='p-4 ml-10 font-light border w-[20vw]' />
              <input type="text" placeholder='Email adress' className='p-4 ml-10 font-light border w-[20vw]'/></div>
        
         <button className="block rounded-full ml-10  mt-5 bg-black px-11 py-3 font-medium text-white hover:bg-[#e4553f] duration-500">POST COMMENT</button>
              </div>
         
         </div>
</div>


    );
};

export default Describblog;