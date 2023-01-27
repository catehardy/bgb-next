import Head from "next/head";
import Image from "next/image";
import "../styles/Home.module.css";
import "./search.js";
import React, { useEffect } from "react";

console.log('this is the root level of index.js');
export default function Home() {
  useEffect(() => {
    console.log('this is inside useEffect, so it loads only in the client side');
  }, []);
  console.log('this is inside the home function');
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
          <header>
            <input type="checkbox" id="check" title="toggle menu" />

            <nav>
              <h1 className="icon gradient-text">
                <a href="./">BGB</a>
              </h1>

              <div className="search-box">
                <div className="dropdown">
                  <form id="boardgame-search" className="search-box">
                    <input
                      id="boardgame-searchfield"
                      type="search"
                      placeholder="Search for a game..."
                    />
                    <span className="fa fa-search" id="user-submission"></span>
                  </form>
                  {/* Lines below not working: dropdown */}
                  <div id="search-dropdown" className="dropdown-content">
                    <div id="api-spot"></div>
                  </div>
                </div>
              </div>

              <ol>
                <li>
                  <a href="#">My Games</a>
                </li>
                <li>
                  <a href="#">Friends</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ol>
              <label htmlFor="check" className="bar">
                <span className="fa fa-bars" id="bars"></span>
                <span className="fa fa-times" id="times"></span>
              </label>
            </nav>
          </header>

          <main>
            <div className="homepage-container">
              <div className="secondary-nav-container">
                <div className="secondary-nav">
                  <div className="nav-box-1">
                    <div className="circle purple-circle">
                      <a href="#" className="navbox-circle-text">
                        Game Categories
                      </a>
                    </div>
                  </div>
                  <div className="nav-box-2">
                    <div className="circle black-circle">
                      <a href="#" className="navbox-circle-text">
                        About BGB
                      </a>
                    </div>
                  </div>
                  <div className="nav-box-3"></div>
                  <div className="nav-box-4">
                    <div className="circle black-circle">
                      <a href="#" className="navbox-circle-text">
                        My Wishlists
                      </a>
                    </div>
                  </div>
                  <div className="nav-box-5">
                    <div className="circle purple-circle">
                      <a href="#" className="navbox-circle-text">
                        Advanced Search
                      </a>
                    </div>
                  </div>
                  <div className="nav-box-6"></div>
                  <div className="nav-box-7"></div>
                  <div className="nav-box-8"></div>
                  <div className="nav-box-9">
                    <div className="circle purple-circle">
                      <a href="#" className="navbox-circle-text">
                        Random Game
                      </a>
                    </div>
                  </div>
                </div>
                <div className="secondary-nav-display">
                  <div className="secondary-nav-display-section-1">
                    <h2>About BGB</h2>
                    <p>
                      Welcome to <strong>Board Game Buddy</strong> - an inclusive
                      app for discovering board games and sharing them with your
                      friends.
                    </p>
                    <p>
                      If you&#39;re just getting into board gaming, or you want to
                      expand your collection and play some exciting new games,
                      we&#39;re here to help! You&#39;ll find curated games lists, links
                      to free online versions of many popular games, and ways to
                      connect with friends to share gaming costs.
                    </p>
                    <p>
                      Try clicking &#39;Random Game&#39; on the checkerboard, to get
                      started!
                    </p>
                  </div>
                  <div className="secondary-nav-display-section-2">
                    <Image
                      className="bgb-logo-large secondary-nav-display-section-2"
                      src="/images/board-game-buddy.svg"
                      alt="Board Game Buddy logo showing a pair of dice on purple background"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>

              <a href="#" className="image-container grid-item grid-item-2">
                <Image
                  className="grid-item-2"
                  src="/images/board-games-with-lgbt-themes.png"
                  alt="Drawing of three people playing cards, with caption '9 Board Games with LGBTQIA+ Themes'"
                  width={400}
                  height={400}
                />
                <p className="main-article-text">
                  9 Board Games with LGBTQIA+ Themes
                </p>
              </a>

              <div className="grid-item grid-item-3 article">
                <Image
                  className="article-image-small"
                  src="/images/nordic-board-game-culture.png"
                  alt="Hnefatafl - a traditional Nordic board game"
                  width={120}
                  height={120}
                />
                <a href="#" className="article-text">
                  Nordic Board Game Culture
                </a>
              </div>

              <div className="grid-item grid-item-4 article">
                <Image
                  className="article-image-small"
                  src="/images/best-beginner-board-games-azul.png"
                  alt="Photo of the board game Azul"
                  width={120}
                  height={120}
                />
                <a href="#" className="article-text">
                  12 Best Beginner Board Games
                </a>
              </div>

              <div className="grid-item grid-item-5 article">
                <Image
                  className="article-image-small"
                  src="/images/anti-colonial-board-games-spirit-island.png"
                  alt="Photo of the board game Spirit Island"
                  width={120}
                  height={120}
                />
                <a href="#" className="article-text">
                  7 Anti-Colonial Board Games
                </a>
              </div>

              <div className="grid-item grid-item-6 article">
                <Image
                  className="article-image-small"
                  src="/images/history-of-board-games-go.png"
                  alt="Photo of the board game Go"
                  width={120}
                  height={120}
                />
                <a href="#" className="article-text">
                  The History of Board Games
                </a>
              </div>

              <div className="grid-item grid-item-7">carousel 1: Kickstarter Games</div>
              <div className="grid-item grid-item-8">carousel 2: New Games</div>
            </div>
          </main>
          <footer>Board Game Buddy &#169; 2023</footer>
        </div>
    </>
  );
}
