import styles from './Card.module.css'

const Card = (props) => {
    return (
        <>
            <p style={{
                letterSpacing: '1.4rem',
                textAlign: 'center',
                textTransform: 'uppercase',
                fontSize: '2.4rem',
                color: 'hsl(183, 100%, 15%)',
                margin: '4rem auto',
            }} >spli<br />tter</p>
            <main className={`${styles.card} ${props.className}`}>
                {props.children}
            </main>
        </>)
}

export default Card