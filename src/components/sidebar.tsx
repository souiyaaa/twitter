import mail from '../assets/mail.png'
import slash from '../assets/slash.png'
import bookmark from '../assets/bookmark.png'
import community from '../assets/icons8-people-96.png'
import logoTwitter from '../assets/image.png'
import bisnis from '../assets/thunder.png'
import profil from '../assets/person.png'
import more from '../assets/more.png'
import home from '../assets/home.svg'
import search from '../assets/search.svg'
import notification from '../assets/notification.svg'
import fotoProfil from '../assets/fotoProfil.png'
import moreAkun from '../assets/moreAkun.png'

const sidebar =() => {
    return (
        <>
            <div className="mt-4 ml-2 ">
                            {/* logo X */}
                            <div className='mr-4 ml-4'>
                                <img src={logoTwitter} alt="logo" className='w-9 mb-8' />
                            </div>
                            {/* layout Navigasi */}
                            <div className='mr-4'>
                            <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={home} alt="ini bisnis" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1 font-bold">
                                    Home
                                    </div>
                                </button>
                                
                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={search} alt="ini explore" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                    Explore
                                    </div>
                                </button>

                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={notification} alt="ini notification" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                    Notification
                                    </div>
                                </button>
                                
                                 <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={mail} alt="ini bisnis" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                    Messages
                                    </div>
                                </button>
                                
                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={slash} alt="ini bisnis" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                    Grok
                                    </div>
                                </button>

                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={bookmark} alt="ini bisnis" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                        Bookmark
                                    </div>
                                </button>
                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={community} alt="ini community" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                        Community
                                    </div>
                                </button>
                                
                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={logoTwitter} alt="ini bisnis" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                        premium
                                    </div>
                                </button>
                                
                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={bisnis} alt="ini bisnis" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                        Business
                                    </div>
                                </button>

                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={profil} alt="ini profile" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                        Profile
                                    </div>
                                </button>

                                <button className='mt-2 flex items-center ml-1 hover:bg-slate-100 p-2 rounded-full'>
                                    <img src={more} alt="ini more" className='w-9 h-auto ' />

                                    <div className="text-lg ml-3 mb-1">
                                        More
                                    </div>
                                </button>

                                <button className="w-full h-12 mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full flex items-center justify-center">
                                Post
                                </button>

                                {/* image and  username*/}
                                <div className='mt-12 flex items-center justify-between'>
                                <div className='flex items-center'>
                                    <img src={fotoProfil} alt="fotoprofil" className='w-12 h-12 rounded-full object-cover' />
                                    <div className='ml-2'>
                                        <div className='font-bold'>
                                           Suryanto
                                        </div>
                                        <div className='text-sm'>
                                           @suryanto
                                        </div>
                                    </div>
                                </div>
                                <img src={moreAkun} alt="moreakun" className='w-3' />
                            </div>


                                 
                            </div>

                        </div>
        </>

    )

}

export default sidebar;