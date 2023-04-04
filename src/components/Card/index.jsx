import './Card.css';

const Card =({nome, img, valor, desconto, vdesc}) => {
    const css = desconto ? 'card bord': 'card';
    return (
        <div className={css}>
            <img src={img} alt="" />
            <div className="info">
                <h3>{nome}</h3>
                <div className="valores">
                    {desconto ? <><p className="valor cDesc">{valor}</p>
                    <span>10% OFF</span>
                    <p className="desc">{vdesc}</p></> :<p className="valor">{valor}</p> }
                </div>
                
            </div>
        </div>
    )
}

export default Card;