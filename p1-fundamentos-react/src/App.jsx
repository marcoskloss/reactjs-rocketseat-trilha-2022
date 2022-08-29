import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    publishedAt: new Date("2022-08-29 09:28:00"),
    author: {
      avatarUrl: "https://github.com/marcoskloss.png",
      name: "Marcos Kloss",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", text: "Fala galera" },
      {
        type: "paragraph",
        text: "Texto aqui que descreve como eu fiz aquela acao top que mudou a vida de várias pessoas",
      },
      {
        type: "paragraph",
        text: "atraves de um método infalivel e muito lucrativo de ajuda humanitaria",
      },
      { type: "paragraph", text: "para saber mais, arrasta pra cima" },
      { type: "link", text: "#nlw" },
      { type: "link", text: "#bolo" },
    ],
  },
  {
    id: 2,
    publishedAt: new Date("2022-08-26 11:28:00"),
    author: {
      avatarUrl: "https://github.com/marcoskloss.png",
      name: "Joao Jose",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", text: "Fala galera" },
      {
        type: "paragraph",
        text: "Texto aqui que descreve como eu fiz aquela acao top que mudou a vida de várias pessoas",
      },
      {
        type: "paragraph",
        text: "atraves de um método infalivel e muito lucrativo de ajuda humanitaria",
      },
      { type: "paragraph", text: "para saber mais, arrasta pra cima" },
      { type: "link", text: "#nlw" },
      { type: "link", text: "#bolo" },
    ],
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
