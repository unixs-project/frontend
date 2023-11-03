import Styles from './styles.module.css'
import Button from '@mui/material/Button';

const Card = ({ name, description, teams }) => {
    
    return (<div className={Styles.card}>
        <div className={Styles.container}>
            <h3 className={Styles.fluxName}>{name}</h3>        
            <div className={Styles.description}>
                <h5>{description}</h5>
                <h5>{teams}</h5>
            </div>
        </div>

        <Button variant="contained"
         style={{ marginBottom: '30px',
          backgroundColor: '#fe4900'
          }}>
            Ver Mais</Button>


    </div>

    )
}

export default Card