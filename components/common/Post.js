import Vote from "../feed/Vote";
import Actions from "../feed/Actions";
import Info from "../feed/Info";
import { useContext } from "react";
import { RedditContext } from "../../context/RedditContext";
import { useRouter } from "next/router";

const style = {
  post: "flex flex-col space-y-1 cursor-pointer",
  wrapper: "flex space-x-3 rounded bg-[#1a1a1b]/80 p-2 border border-[#343536]",
  postTitle: "text-lg font-medium text-[#D7DADC]",
  postContent: "text-sm font-light text-[#D7DADC]/80",
};

const Post = ({
  id,
  title,
  author,
  upvotes,
  downvotes,
  content,
  created_at,
}) => {
  const router = useRouter();
  const { setSelectedPost } = useContext(RedditContext);

  const navigateToPost = () => {
    setSelectedPost({
      id,
      title,
      content,
      author,
      created_at,
      upvotes,
      downvotes,
    });

    router.push(`/post/${id}`);
  };

  return (
    <div className={style.wrapper}>
      <Vote upvotes={upvotes} downvotes={downvotes} />
      <div className={style.post} onClick={navigateToPost}>
        <Info author={author} />
        <h1 className={style.postTitle}>{title}</h1>
        <p className={style.postContent}>{content}</p>
        <Actions />
      </div>
    </div>
  );
};

export default Post;
