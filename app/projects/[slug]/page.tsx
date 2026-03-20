// app/projects/[slug]page.tsx (dynamic project page & server component)

// Define the types for the parameters
type TodoSampleProps = {
  params: {
    slug: number,
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };
};

const ProjectPage: React.FC<TodoSampleProps> = async ({
  params,
}: TodoSampleProps) => {
  
  const { slug } = await params; // Extract the id from the params by destructuring
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${slug}`,);
  const data = await response.json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>name {data.name ? data.name : "No Name Available"}</h1>
        <p>email: {data.email ? data.email : "No Email Available"}</p>
        <p>body: {data.body ? data.body : "No Body Available"}</p>
      
      </main>
    </div>
  );
};

export default ProjectPage;
