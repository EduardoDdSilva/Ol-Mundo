import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotosSobreMim from "assets/sobre_mim_foto.png";

export default function sobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Antônio! 
            </h3>

            <img src={fotosSobreMim} 
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotosSobreMim}
            />
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur temporibus eos sapiente beatae consectetur veritatis nemo dicta mollitia, minima suscipit, ab ipsa maiores, accusamus explicabo corporis blanditiis distinctio pariatur?
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur temporibus eos sapiente beatae consectetur veritatis nemo dicta mollitia, minima suscipit, ab ipsa maiores, accusamus explicabo corporis blanditiis distinctio pariatur?
            </p>
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur temporibus eos sapiente beatae consectetur veritatis nemo dicta mollitia, minima suscipit, ab ipsa maiores, accusamus explicabo corporis blanditiis distinctio pariatur?
            </p>
            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur temporibus eos sapiente beatae consectetur veritatis nemo dicta mollitia, minima suscipit, ab ipsa maiores, accusamus explicabo corporis blanditiis distinctio pariatur?
            </p>
        </PostModelo>
    )
}