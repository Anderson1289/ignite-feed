import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
        avatarUrl: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t39.30808-6/358397730_826925922126618_7460578701354625998_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE68BHdh3K-WD3Q3qlnWB37jDC8wwL4WvqMMLzDAvha-rlCOZwi34_N-yR0OZHGC5lwqGpwfFDBhyx38vl5L63i&_nc_ohc=Jh6tto2FZAUAX90nnTf&_nc_ht=scontent.fsdu12-1.fna&oh=00_AfDoDCEBwS2VNthOcynWda93rOSoknIpoR-5D-swzHfbAg&oe=65B2ECF1',
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
        avatarUrl: 'https://scontent.fsdu12-2.fna.fbcdn.net/v/t39.30808-6/361846359_7221978177819247_3236259925522704566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE1OUxkmYH-0uQm5d9rIw8giKU2Y6TDK6OIpTZjpMMro4rOSzHZmEcrCy2wD-KJvdrFqRzzAESl3L_pxlf2S5qy&_nc_ohc=U1t6_vUHQwgAX_cc3ku&_nc_ht=scontent.fsdu12-2.fna&oh=00_AfAWh7ph89909qEXbaPu6JcTJfLOXipW0CYGDD4Sgq0Wrw&oe=65AF2DE1',
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
          post={post}
        />
        )
      })}
      </main>
    </div>
     

 
   </div>    
  )
}


