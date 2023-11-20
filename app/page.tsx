import ProfileView from "@/components/ProfileView";
import PostsData from "@/assets/posts.json";
import Post from "@/components/Post";

export default function Home() {
  return (
    <main className="mt-20 bg-white ">
      <ProfileView />
      <div className=" text-blue-400 bg-slate-50 rounded-md font-bold border-2 border-gray-600  border-opacity-20 w-fit  p-2 -mt-10 border-l-0 border-b-0">
        {PostsData.lenght} Posts
      </div>
      {PostsData.posts.map((post) => (
        <Post
          author={post.author}
          data={post.data}
          description={post.description}
          heading={post.heading}
          views={post.views}
          readTime={post.duration}
        />
      ))}
    </main>
  );
}
