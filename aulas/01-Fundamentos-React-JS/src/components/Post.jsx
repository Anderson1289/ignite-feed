import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://scontent.fsdu12-2.fna.fbcdn.net/v/t39.30808-6/361846359_7221978177819247_3236259925522704566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE1OUxkmYH-0uQm5d9rIw8giKU2Y6TDK6OIpTZjpMMro4rOSzHZmEcrCy2wD-KJvdrFqRzzAESl3L_pxlf2S5qy&_nc_ohc=CmbAkMQDKWQAX-IuWtQ&_nc_ht=scontent.fsdu12-2.fna&oh=00_AfA5_i1vgGg8vxjsgDlNrXk2s7Ps9feDYzKvtH1e5mwPkg&oe=65A54AA1" />
                    <div className={styles.authorInfo}>
                        <strong> Anderson Vieira </strong>
                        <span>Web Developer</span>
                    </div>
                </div>


                <time title="12 de Janeiro às 23:08h" dateTime='2024-01-12'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto                que fiz no NLW Return, evento da Rocketseat. O nome do              projeto é DoctorCare 🚀</p>

                 <p><a href=""> 👉 {' '} jane.design/doctorcare</a></p>

                <p> <a href=""> #novoprojeto</a> {' '}
                <a href="">#nlw </a>
                <a href="">#rocketseat</a>
                </p>
            </div>


            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentário'>
                </textarea>

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}