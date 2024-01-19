import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { TrashSimple } from "@phosphor-icons/react/dist/ssr"
import { Avatar } from "./avatar"

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment () {
        onDeleteComment(content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://scontent.fsdu12-2.fna.fbcdn.net/v/t39.30808-6/361846359_7221978177819247_3236259925522704566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE1OUxkmYH-0uQm5d9rIw8giKU2Y6TDK6OIpTZjpMMro4rOSzHZmEcrCy2wD-KJvdrFqRzzAESl3L_pxlf2S5qy&_nc_ohc=6Mn7sHXbqjEAX_qXXJ2&_nc_ht=scontent.fsdu12-2.fna&oh=00_AfAWf0uKKDgYVjG_4CPqVaOjCVZ0rCeATniZWRYqj3ebVQ&oe=65AB3961"/>   

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}><strong>Anderson Vieira</strong>
                        <time title="12 de Janeiro às 23:08h" dateTime='2024-01-12'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                         <Trash  size={24} />
                        </button>
                    </header>  
 
                  <p>{content}</p>
                </div>
                
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button> 
                </footer>
            </div>
        </div>
    )
}