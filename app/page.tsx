import Intro from "@/components/intro";
import Link from 'next/link';

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
  const data = await response.json();
  return data;
}

const Home: React.FC = async() => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-5">
      <section className="bg-amber-300 p-8 rounded-lg">
        <Intro />

        <ul className="list-disc pl-5 my-3">
        {posts.map((post: { id: number; name: string; }) => (
          <li key={post.id} className="mb-2">
            <Link className="text-white hover:underline" href={`/projects/${post.id}`}>{post.name}</Link>
          </li>
        ))}
         
       </ul>
      </section>

      <section className="bg-amber-300 p-8 rounded-lg">
        <Intro />
      </section>
    </div>
  );
}

export default Home;
