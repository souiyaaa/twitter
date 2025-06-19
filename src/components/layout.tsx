import Sidebar from '../components/sidebar'
import Post from '../components/post'
import search from '../assets/search.svg'

const Layout = () => {
 return (
    <>
        <div className="h-screen bg-white">
                <div className="container h-full mx-auto max-w-6xl">
                    <div className="grid grid-cols-[1fr_2fr_1fr] h-screen">
                    <div className="border-r-[1px] border-gray-300 ">
                        {/* Left Column Content */}
                        {/* < /sidebar> */}
                        <Sidebar />
                        
                    </div>
                    <div className="border-r-[1px] border-gray-300">
                        {/* Center Column Content */}
                       
                       {/* Konten fyp dan following */}
                        <Post />
                      </div>
                        <div className=' flex flex-col mx-2 my-2'>
                        {/* Right Column Content */}
 
                        <div className="flex items-center border border-gray-300 rounded-full mb-4 w-full"> {/* Flex container for input and icon */}
                        <img src={search} alt="search icon" className="w-4 h-4 ml-2" /> {/* Add your icon here */}
                        <input 
                            type="text" 
                            name="search" 
                            id="" 
                            placeholder='Search' 
                            className='border-none w-full rounded-full px-2 py-1 focus:outline-none' // Adjusted styles
                        />
                    </div>
                     

                        <div className=' h-[200px] w-full   border rounded-xl pl-2 pr-2 pt-2 pb-2'>
                            <div className="font-xl font-bold">
                                Subscribe to premium
                            </div>
                            <div>
                            Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                            </div>
                            <button className='bg-blue-500 text-white pl-2 pr-2 py-1 mt-4 ml-auto  rounded-full'>
                                    Subscribe
                                </button>
                        </div>
                        

                    </div>
                    
                </div>
            </div>
        </div>
    </>
 ) 
}
export default Layout

