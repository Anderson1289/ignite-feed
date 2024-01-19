import { PencilLine } from "@phosphor-icons/react"

import styles from './Sidebar.module.css';
import { Avatar } from "./avatar";

export function Sidebar(){
    return(
        
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className={styles.profile}>
                <Avatar src="https://scontent.fsdu12-2.fna.fbcdn.net/v/t39.30808-6/361846359_7221978177819247_3236259925522704566_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE1OUxkmYH-0uQm5d9rIw8giKU2Y6TDK6OIpTZjpMMro4rOSzHZmEcrCy2wD-KJvdrFqRzzAESl3L_pxlf2S5qy&_nc_ohc=U1t6_vUHQwgAX_cc3ku&_nc_ht=scontent.fsdu12-2.fna&oh=00_AfAWh7ph89909qEXbaPu6JcTJfLOXipW0CYGDD4Sgq0Wrw&oe=65AF2DE1" />

                <strong>Anderson Vieira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}