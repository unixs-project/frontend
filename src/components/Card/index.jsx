import './card.css'
import Button from '@mui/material/Button';

const Card = ({ name, description, teams }) => {
    
    return (<div className='card'>
        <div className='container'>
            <h3 className='fluxName'>{name}</h3>        
            <div className='description'>
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