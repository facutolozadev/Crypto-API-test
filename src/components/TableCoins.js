import React from 'react'
import '../App.css';
import CoinRow from './CoinRow';


const titles = ['#', 'Coin', 'Price', '24h', 'Total Volume', 'Market cap.']

const TableCoins = ({coins, search}) => {
  
    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())) 

    return (
    <table style={{minWidth: '778px'}} className="table table-dark mt-4 table-hover">
    <thead className="">
        <tr className="">
            {
                titles.map((title, index) => (
                    <td key={index}>{title}</td>
                ))
            }
        </tr>
    </thead>
    <tbody>
        {filteredCoins.map((coin, index) => (
            <CoinRow key={coin.id} coin={coin} index={index}/> 
        ))}
    </tbody>
   </table>
  )
}

export default TableCoins