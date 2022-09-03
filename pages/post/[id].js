import Post from "../../components/common/Post";
import { useContext, useEffect } from "react";
import { RedditContext } from "../../context/RedditContext";
import Header from "../../components/header";
import { useRouter } from "next/router";
import About from "../../components/community/About";

const style = {
  wrapper: "flex min-h-screen flex-col bg-black text-white",
  container: "mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-[5rem] px-6",
  containerWrapper: "w-full space-y-4 lg:w-2/3",
};

const PostView = () => {
  const router = useRouter();
  const { selectedPost } = useContext(RedditContext);

  useEffect(() => {
    if (selectedPost == null) {
      router.push("/");
    }
  }, []);
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <div className={style.containerWrapper}>
          <Post {...selectedPost} />
        </div>
        <div className="hidden w-1/3 lg:block">
          <About />
        </div>
      </div>
    </div>
  );
};

export default PostView;
