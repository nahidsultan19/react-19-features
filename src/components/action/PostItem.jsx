const PostItem = ({ post }) => {
  return (
    <div className="bg-emerald-50 border border-gray-200 p-4 my-6 rounded-lg">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostItem;
