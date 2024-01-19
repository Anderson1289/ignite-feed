import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';



const posts = [
  {
    id: 1,
    author: {
        avatarUrl: 'https://scontent.fsdu12-2.fna.fbcdn.net/v/t39.30808-6/358397730_826925922126618_7460578701354625998_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE68BHdh3K-WD3Q3qlnWB37jDC8wwL4WvqMMLzDAvha-rlCOZwi34_N-yR0OZHGC5lwqGpwfFDBhyx38vl5L63i&_nc_ohc=bDpJqZHWChIAX_rOIGX&_nc_ht=scontent.fsdu12-2.fna&oh=00_AfAbpEuln33SRvQZg6cUQWSdALTap1Jzo8LOCvjPEZBQIg&oe=65AB03F1',
        name: 'Hernandes Dias',
        role: 'Escritor'
        },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2024-01-16 22:29:00'),
  },
  {
    id: 2,
    author: {
        avatarUrl: 'https://scontent.fsdu12-2.fna.fbcdn.net/v/t39.30808-6/361846359_7221978177819247_3236259925522704566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE1OUxkmYH-0uQm5d9rIw8giKU2Y6TDK6OIpTZjpMMro4rOSzHZmEcrCy2wD-KJvdrFqRzzAESl3L_pxlf2S5qy&_nc_ohc=6Mn7sHXbqjEAX_qXXJ2&_nc_ht=scontent.fsdu12-2.fna&oh=00_AfAWf0uKKDgYVjG_4CPqVaOjCVZ0rCeATniZWRYqj3ebVQ&oe=65AB3961',
        name: 'Anderson Vieira',
        role: 'Web Developer'
        },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋', },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2024-01-15 22:29:00'),
  },
];


export function App() {
   return (
    <div>
      <Header />

    <div className={styles.wrapper}>
     <Sidebar />
      <main>
      {posts.map(post => {
        return (
        <Post 
          key={post.id}
          author={post.author}
          content={post.content}
          publishedAt={post.publishedAt}
        />
        )
      })}
      </main>
    </div>
     

 
   </div>    
  )
}


