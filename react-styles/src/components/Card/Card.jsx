import styles from './Card.module.sass'

export function Card(){

   const titleStyles = {
      fontSize:'2rem', 
      textAlign:'center' , 
      color: 'red'
   }
   
     return (
        <section className={styles.cardContainer}>
        <h2 style={titleStyles}>Card Example</h2>

        <img className= {styles.cardImg} src="/vite.svg" alt="" />

        <p className= {styles.cardContent}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, incidunt? Ab iusto repudiandae quis quisquam veniam similique tempore, dolorum aut neque consequatur accusamus, quae architecto recusandae. Illo exercitationem itaque sunt?</p>
        
        </section>
     )
}