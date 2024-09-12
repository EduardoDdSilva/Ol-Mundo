import styles from "./BotaoPincipal.module.css";

export default function BotaoPincipal({ children, tamanho }) {
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${[tamanho]}
        `}>
            {children}
        </button>
    )
}