import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Polling App</title>
        <meta name="description" content="Polling app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{hello.data?.greeting}</main>
    </>
  );
};

export default Home;
