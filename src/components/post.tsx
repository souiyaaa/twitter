
import fotoProfil from '../assets/fotoProfil.png'
import emot from '../assets/emot.png'
import schedule from '../assets/schedule.png'
import poll from '../assets/poll.png'
import gif from '../assets/gif.png'
import media from '../assets/media.png'
import postPicture from '../assets/postPicture.jpg'
import like from '../assets/like.png'
import comment from '../assets/comment.png'
import repost from '../assets/repost.png'
import view from '../assets/view.png'
import Bookmark from '../assets/bookmark copy.png'
import activeBookmark from '../assets/activeBookmark.png'
import React, { useState } from 'react';
import activeLike from '../assets/activeLike.png'
import activeComment from '../assets/activeComment.png'
import activeRepost from '../assets/activeRepost.png'


const Post = () => {
    const [likeState, isLiked] = useState(false) //like state  
    const [totalLike, setLikes] = useState(0)   //countLike
    const [commentState, isCommented] = useState(false)
    const [totalComment, setComments] = useState(0)
    const [repostState, isReposted] = useState(false)
    const [totalRepost, setReposts] = useState(0)
    const [bookmarkState, isBookmarked] = useState(false)
    const [typing, setTyping] = useState('')


    const handleRepost = () => {
        isReposted(!repostState)
        if (repostState) {
            setReposts(totalRepost - 1)
        } else {
            setReposts(totalRepost + 1)
        }
    }

    const handleBookmark = () => {
        isBookmarked(!bookmarkState)
    }
    //here we will change the icon based on the state

    const changeBookmark = () => {
        if (bookmarkState) {
            return <img src={activeBookmark} alt="comment" className='w-5 h-5 object-contain' />
        }
        else {
            return <img src={Bookmark} alt="comment" className='w-5 h-5 object-contain' />
        }
    }

    const changeRepost = () => {
        if (repostState) {
            return <img src={activeRepost} alt="repost" className='w-5 h-5 object-contain' />

        } else {
            return <img src={repost} alt="repost" className='w-5 h-5 object-contain' />
        }
    }


    const handleLike = () => {
        isLiked(!likeState)
        if (likeState) {
            setLikes(totalLike - 1)
        }
        else {
            setLikes(totalLike + 1)
        }
    }

    const handleComment = () => {
        isCommented(!commentState)
        if (commentState) {
            setComments(totalComment - 1)
        }
        else {
            setComments(totalComment + 1)
        }
    }


    const changeLike = () => {
        if (likeState) {
            return <img src={activeLike} alt="like" className='w-5 h-5 object-contain' />

        } else {
            return <img src={like} alt="like" className='w-5 h-5 object-contain' />
        }
    }

    const changeComment = () => {
        if (commentState) {
            return <img src={activeComment} alt="comment" className='w-5 h-5 object-contain' />
        }
        else {
            return <img src={comment} alt="comment" className='w-5 h-5 object-contain' />
        }
    }

    return (
        <>
            <div className='h-12 w-full flex border-b border-gray-300'>
                <div className='w-1/2 h-auto flex items-center justify-center hover:bg-slate-200 relative pb-2'>
                    <div>
                        For you
                    </div>
                    <div className='absolute bottom-0 h-1 w-12 bg-blue-400 rounded-md  '>

                    </div>
                </div>
                <div className='w-1/2 h-auto flex items-center justify-center hover:bg-slate-200'>
                    Following
                </div>
            </div>

            {/* what is happening postingan */}
            <div className='flex items-start p-2 '>
                <div>
                    <img src={fotoProfil} alt="fotoProfil"
                        className='
                                w-12 h-10 object-cover rounded-full
                               '
                    />
                </div>

                <div className='pl-3 w-full '>
                    <input type="text"
                        placeholder='What is happening?!'
                        id=""
                        value={typing}
                        onChange={(e) => setTyping(e.target.value)}
                        className='focus:outline-none w-full'


                    />

                    <div className='text-blue-500 text-sm font-bold'>
                        Everyone can reply
                    </div>
                </div>

            </div>
            {/* untuk tombol properti */}
            <div className='ml-12 mt-2 flex'>

                <button>
                    <img src={media} alt="ini media"
                        className='w-4 h-4 object-contain'
                    />
                </button>


                <button>
                    <img src={gif} alt="ini emot"
                        className='w-4 h-4 ml-4 object-contain' />
                </button>

                <button> <img src={schedule} alt="Schedule" className='w-4 h-4 ml-4 object-contain' /></button>


                <button>
                    <img src={emot} alt="ini emot"
                        className='w-4 h-4 ml-4 object-contain' />
                </button>

                <button>
                    <img src={schedule} alt="Ini schedule" className='w-4 h-4 ml-4 object-contain' />
                </button>


                {/* the one that we will do */}
                {
                    typing &&
                    <button className='bg-blue-500 text-white pl-2 pr-2 mr-4 ml-auto  rounded-full'>
                        Post
                    </button>
                }

            </div>
            <div className='border-t border-b border-gray-300 mt-4 flex justify-center items-center'>
                <div className='text-blue-400 text-sm p-2'>
                    Show 175 Posts
                </div>
            </div>

            <div className="border-b border-gray-300">
                <div className='flex'>
                    <img
                        src={postPicture} //nice
                        alt="fotoProfil"
                        className='w-12 h-12 object-cover rounded-full mt-4 ml-2'
                    />
                    <div className='ml-2 mt-4 flex flex-col'>
                        <div className='flex'>
                            <div className='text-sm font-bold hover:underline'>
                                Theressa Sean Ken
                            </div>
                            <div className='text-sm text-gray-500 ml-2'>
                                @ThereSean 3h
                            </div>
                        </div>
                        <div className='text-sm'>
                           Jumbo is the best movie so far! 😭
                        </div>
                    </div>
                </div>
                {/* untuk tombol properti */}
                <div className='ml-14 mt-3 flex items-center justify-between pr-4 text-gray-500 mb-4'>
                    {/* Comment Button */}
                    <button onClick={handleComment} className='flex items-center space-x-2 '>
                        {changeComment()}
                        <span className='text-sm'>{totalComment}</span>
                    </button>

                    {/* Repost Button */}
                    <button onClick={
                        handleRepost
                    } className='flex items-center space-x-2 '>
                        {changeRepost()}
                        <span className='text-sm'>{totalRepost}</span>
                    </button>

                    {/* Like Button */}
                    <button onClick={handleLike} className='flex items-center space-x-2 '>
                        {changeLike()}
                        <span className='text-sm'>{totalLike}</span>
                    </button>

                    {/* View Count Button */}
                    <button className='flex items-center space-x-2 '>
                        <img src={view} alt="view" className='w-5 h-5 object-contain' />
                        <span className='text-sm'>40</span>
                    </button>

                    {/* Bookmark Button */}
                    <button onClick={handleBookmark} className='flex items-center space-x-2 '>
                        {changeBookmark()}
                    </button>
                </div>
                <div>

                </div>
            </div>
            
        </>

    )
}

export default Post