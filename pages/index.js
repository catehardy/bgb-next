import Head from "next/head";
import "./search.js";
import Body from "../src/components/body";
import TopNav from "../src/components/topnav";

// TODO:
// - search.js should move to where search component is
// - reorganize the css with tailwind

export default function Home() {
  return (
    <>
      <Head>
        <title>Board Game Buddy</title>
        <meta
          name="A friendly app for discovering new board games"
          content="Board game info, recommendations and articles"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Do not add <script> tags using next/head (see <script> tag with src="https://kit.fontawesome.com/67c66657c7.js").
        Use next/script instead. See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component */}
        <script async src="https://kit.fontawesome.com/67c66657c7.js"></script>
      </Head>

      <div className="main-container">
        <TopNav />
        <main>
          <Body />
        </main>
        <footer>Board Game Buddy &#169; 2023</footer>
      </div>

    </>
  );
}
