import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";

const BlogDetail = ({
  blog,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <h1>{blog.title}</h1>

      <p>{blog.body}</p>
    </>
  );
};



export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {

  const id = context.params?.id;
  //const result = await fetch('http://localhost:3000/hello?num=10');

    // const response = await fetch('https://api.vercel.app/blog/1' );

   // const response = await getData();
  //    const json = await response.json()

  return {
    props: {
      blog: {
        userId: 1,
        id: context.params?.id,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit" + context.params?.id,
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" + context.params?.id,
      },
    },
  };
};

export default BlogDetail;
