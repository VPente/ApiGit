import './style.css'

export function Card({name,avatar }){


return(
    <div className='card'>
        <strong>{name}</strong>
        <img src={avatar}></img>
    </div>
)

}