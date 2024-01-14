import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
   return (
    <div>
    <Header />

    <div className={styles.wrapper}>
     <Sidebar />
      <main>
      <Post 
      author="Anderson Vieira"
      content= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis nulla, tenetur sed dolore ipsum sit asperiores facere porro? Iusto corporis dolor veniam eaque totam. Illum molestias at possimus quo."/> 
    <Post 
    author="Fulano das couves"
    content="Algo pra preencher espaço"/>
      </main>
    </div>
     

    {/* 
    <Post />
    <Post />
    <Post />
    <Post /> */}
   </div>    
  )
}


