import Image from "next/image";

const style = {
  wrapper:
    "flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300",
  profileInfoContainer: "flex items-center space-x-4 ",
  profilePicContainer: `relative h-12 w-12`,
  profilePic: "object-contain",
  aboutContent: "py-2 text-sm",
  statsWrapper: "flex items-center space-x-16",
  stat: "flex flex-col",
  statTitle: "text-xs",
  footer: "flex flex-col space-y-4 pt-2",
  createdAt: "text-sm font-light",
  joinedButton:
    "cursor-pointer rounded-full border border-gray-300 py-1 text-center text-sm font-semibold",
};

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className="pb-2">
        <div className={style.profileInfoContainer}>
          <div className={style.profilePicContainer}>
            <Image
              src="https://res.cloudinary.com/detk4gyj1/image/upload/q_33/v1661187462/RedditClone/DALL_E_2022-08-03_17.00.43_-_Thor_lightening_the_sky_with_his_hammer_in_dark_y2uycq.png"
              layout="fill"
              className={style.profilePic}
              alt="Profile Image"
            />
          </div>
          <p>r/shivamsharma</p>
        </div>
        <p className={style.aboutContent}>
          Hi There ! My name is Shivam Sharma and right now you are experiencing
          a reddit clone website made by me. I am a professional web developer
          and my weapons are reactjs,javasript,nextjs,html etc. I am also a
          freelancer so you can contact me for further details. Contact Details
          : me@example.com
        </p>

        <div className={style.statsWrapper}>
          <div className={style.stat}>
            <span>6.9m</span>
            <span className={style.statTitle}>Members</span>
          </div>
          <div className={style.stat}>
            <span>420</span>
            <span className={style.statTitle}>Online</span>
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <p className={style.createdAt}>Created Jan 15, 2004</p>

        <div className={style.joinedButton}>Joined</div>
      </div>
    </div>
  );
};

export default About;
