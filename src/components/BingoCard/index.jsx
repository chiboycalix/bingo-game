import { BingoCard } from './styles';

const BingoCardComponent = ({ index, onClick, isMarkedIndex, text }) => {
  return (
    <BingoCard
      key={index}
      onClick={() => onClick(index)}
      className={`${isMarkedIndex.includes(index) ? 'marked' : ''}`}
    >
      {text === 'Meet Bingo' ? <h3>Meet Bingo</h3> : <p>{text}</p>}
    </BingoCard>
  )
}

export default BingoCardComponent
