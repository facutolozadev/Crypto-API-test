import React from 'react'

const CoinRow = ({coin, index}) => {
  return (
    <tr >
        <td>{index}</td>
        <td className="font-weight-bold">
            <img 
            style={{width: '25px'}} 
            className="img-fluid me-4" 
            src={coin.image} 
            alt={coin.name} />
            
        <span>{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span> 
      
        </td>
        <td>{`${coin.current_price} US$`}</td>
        <td className={Math.floor(coin.price_change_percentage_24h) < 0 ? `text-danger`: `text-success`}>{`${coin.price_change_percentage_24h.toFixed(1)}%`}</td>
        <td>{`${coin.total_volume}US$`}</td>
        <td>{`${coin.market_cap}US$`}</td>
    </tr>
  )
}

export default CoinRow