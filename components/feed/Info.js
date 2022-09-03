
const style = {
  profilePic: 'h-4 w-4 rounded-full',
  wrapper : 'flex items-center space-x-1 test-xs text-[#818384]',
  profilePicContainer :'flex items-center space-x-1',
  tag : 'cursor-pointer text-xs font-semibold text-[#D7DADC] hover:underline',
postedBy: 'flex items-center space-x-1',
}

const Info = ({author}) => {
  return (
    <div className = {style.wrapper}>
      <div className = {style.profilePicContainer}>
   <img
     className= {style.profilePic}
     src= 'https://res.cloudinary.com/detk4gyj1/image/upload/ar_1:1,b_rgb:1a1a1b,bo_1px_solid_rgb:ff0000,c_fill,g_auto,r_max,w_1000/v1661187462/RedditClone/DALL_E_2022-08-03_17.00.43_-_Thor_lightening_the_sky_with_his_hammer_in_dark_y2uycq.png'
     />
        </div>

      <div className={style.tag}>r/shivamsharma</div>
      <div>•</div>
      <div className= {style.postedBy}> 
      <span>Posted by {author}</span>
      <span>•</span>
      <span>October 15</span>
      </div>
    </div>
  )
}

export default Info