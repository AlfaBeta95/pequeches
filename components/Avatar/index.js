import Image from 'next/image';
import styles from './styles.module.css';

export default function Avatar({
    alt,
    src,
    text,
}) {
    return (
        <>
            <div className={styles.container}>
                <Image className={styles.avatar} alt={alt} src={src} title={alt} width={48} height={48}/>
                {text && <strong>{text}</strong>}
            </div>
        </>
    )
}