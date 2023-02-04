import React from "react";
import blogData from "../data/blog";

console.log(blogData);

const Header = ({ name }) => (
  <header>
    <h1>{name}</h1>
  </header>
);

const About = ({ image, about }) => (
  <aside>
    <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
    <p>{about}</p>
  </aside>
);

const Article = ({ title, date, preview, minutesToRead }) => {
  const getEmoji = (minutesToRead) => {
    if (minutesToRead < 30) {
      const coffeeCups = Math.ceil(minutesToRead / 5);
      return "☕️".repeat(coffeeCups) + ` ${minutesToRead} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutesToRead / 10);
      return "🍱".repeat(bentoBoxes) + ` ${minutesToRead} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      {minutesToRead && <p>{getEmoji(minutesToRead)}</p>}
    </article>
  );
};

const ArticleList = ({ posts }) => (
  <main>
    {posts.map((post, index) => (
      <Article key={index} {...post} />
    ))}
  </main>
);

const App = () => (
  <div>
    <Header name="My Blog" />
    <About
      image="https://via.placeholder.com/215"
      about="Welcome to my blog where I write about interesting things."
    />
    <ArticleList
      posts={[
        {
          title: "Article 1",
          date: "January 1, 2021",
          preview: "Preview of article 1",
          minutesToRead: 7,
        },
        {
          title: "Article 2",
          date: "January 2, 2021",
          preview: "Preview of article 2",
          minutesToRead: 35,
        },
      ]}
    />
  </div>
);

export default App;

