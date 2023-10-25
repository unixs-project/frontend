import './card.css'

const Card = ({ name, description, teams }) => {
    
    return (<div className='card'>
        <div className='container'>
            <h3 className='fluxName'>{name}</h3>
        
            <div className='description'>
                <h5>{description}</h5>
                <h5>{teams}</h5>
            </div>
        </div>

        <button>Ver Mais</button>

    </div>

    )
}

export default Card