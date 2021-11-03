import { useState } from 'react';
import { BingoBoardWrapper, Bing, BingoListWrapper } from './styles';
import shuffledTextList from '../../utils/bingoTextList';
import { winOptions } from '../../utils/winArray';
import { WinModal, BingoCard } from '../../components';


const BingoBoard = () => {
  const [isMarkedIndex, setIsMarkedIndex] = useState([12]);
  const [win, setWin] = useState(false);
  const [bingoCount, setBingoCount] = useState(0);
  const [time, setTime] = useState();


  const handleTileClick = (index) => {
    // do nothing if the middle tile is clicked
    if (index === 12) {
      return null;
    }
    if (isMarkedIndex.includes(index)) {
      handleRemoveCard(index)
    } else {
      isMarkedIndex.push(index)
      const isMarkedIndexArray = [...isMarkedIndex];
      setIsMarkedIndex(isMarkedIndexArray);
      handleWin()
    }
  }

  const handleRemoveCard = (index) => {
    const remainingIndex = isMarkedIndex.filter((s) => s !== index);
    setIsMarkedIndex(remainingIndex)
  }

  const handleWin = () => {
    // return an array that contains true for a row,column, or diagonal that meets a bingo rule
    const bingos = winOptions.map((item) => {
      return item.every((i) => isMarkedIndex.includes(i));
    });
    // filter the value in the bingo array that evalutes to true(a bingo)
    const hasBingo = bingos.filter((b) => b === true);
    if (hasBingo.length > bingoCount) {
      setWin(true)
      // set the time a bingo was made
      setTime(new Date().toLocaleTimeString('en-US'));
      // after 5 seconds, reset the win status to false to continue with the game
      setTimeout(() => {
        setWin(false)
      }, 5000)
    }
    // set the hasBingo length to state and use it subsequently to get more bingos
    setBingoCount(hasBingo.length)
  }

  return (
    <BingoBoardWrapper>
      {
        win &&
        <WinModal>
          <Bing>
            <h2><span>👏🏽</span> Bingo <span>👏🏽</span></h2>
            <h2>{time}</h2>
          </Bing>
        </WinModal>
      }

      <BingoListWrapper>
        {
          shuffledTextList.map((text, index) => {
            return <BingoCard
              key={index}
              onClick={() => handleTileClick(index)}
              isMarkedIndex={isMarkedIndex}
              text={text}
              index={index}
            />
          })
        }
      </BingoListWrapper>
    </BingoBoardWrapper>
  )
}

export default BingoBoard
