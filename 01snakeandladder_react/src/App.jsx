import GridItem from './components/GridItem'
import DiceComponent from './components/DiceComponent'
import LineConnector from './components/LadderComponent';
import CurvedLineConnector from './components/SnakeComponent';
import './App.css'
import React, { useEffect, useState } from 'react';


const grid = [
  100, 99, 98, 97, 96, 95, 94, 93, 92, 91,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  80, 79, 78, 77, 76, 75, 74, 73, 72, 71,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  60, 59, 58, 57, 56, 55, 54, 53, 52, 51,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  40, 39, 38, 37, 36, 35, 34, 33, 32, 31,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const allSnakes = [
  [[98, 26], [94, 52], [83, 23], [61, 19], [45, 11], [38, 6]],
  [[97, 28], [81, 56], [88, 24], [62, 18], [46, 12], [36, 5]],
  [[97, 25], [88, 51], [83, 20], [65, 15], [49, 9], [37, 3]],
  [[97, 30], [92, 58], [85, 24], [68, 14], [50, 12], [36, 2]],
  [[96, 28], [89, 31], [81, 22], [62, 18], [65, 8], [45, 5]],
  [[99, 31], [93, 56], [82, 21], [65, 13], [52, 10], [36, 4]],
  [[94, 29], [85, 47], [81, 25], [60, 18], [44, 7], [78, 1]],
  [[97, 32], [94, 53], [80, 26], [63, 16], [47, 10], [41, 2]],
  [[96, 35], [92, 68], [83, 24], [67, 9], [53, 15], [39, 3]],
  [[96, 28], [87, 48], [78, 23], [61, 12], [42, 6], [50, 8]],
]
const allLadders = [
  [[2, 43], [7, 30], [15, 85], [24, 50], [31, 67], [40, 79]],
  [[3, 51], [6, 27], [20, 70], [25, 55], [52, 72], [57, 95]],
  [[6, 48], [8, 29], [18, 62], [26, 55], [34, 72], [42, 85]],
  [[5, 67], [10, 31], [19, 60], [28, 49], [34, 84], [45, 78]],
  [[1, 47], [9, 30], [17, 63], [25, 52], [36, 73], [48, 87]],
  [[5, 44], [12, 35], [18, 60], [27, 54], [33, 71], [46, 89]],
  [[6, 42], [11, 33], [21, 68], [26, 56], [38, 76], [50, 93]],
  [[3, 40], [13, 31], [23, 61], [30, 54], [44, 75], [55, 91]],
  [[2, 40], [14, 36], [20, 66], [29, 58], [43, 79], [51, 94]],
  [[5, 46], [18, 37], [22, 69], [35, 57], [41, 83], [52, 94]],
]



function App() {
  let [turn, setTurn] = useState(0)
  let [dice, setDice] = useState(1)
  let [positionOne, setPositionOne] = useState(0)
  let [positionTwo, setPositionTwo] = useState(0)

  let [snakes, setSnakes] = useState([[98, 28], [95, 56], [88, 24], [62, 18], [48, 12], [36, 5]])
  let [ladders, setLadders] = useState([[3, 51], [6, 27], [20, 70], [25, 55], [52, 72], [57, 96]])

  let [snakeP, setSnakeP] = useState([98, 95, 88, 62, 48, 36])
  let [ladderP, setLadderP] = useState([3, 6, 20, 25, 52, 57])

  let [disableChangeBoardButton, setChangeDisableButton] = useState(false)
  let [disablePvP,setPvPDisable] = useState(false)
  let [disableComputer,setComputerDisable] = useState(false)


  useEffect(() => {
    if (positionOne >= 100) {
      setPositionOne(100)

      setTimeout(() => {
        let reload = window.confirm('Player 1 Wins')
        if (reload) {
          location.reload()
        }
      }, 500);
    }
    if (positionTwo >= 100) {
      setPositionTwo(100)
      setTimeout(() => {
        let reload = window.confirm('Player 2 Wins')
        if (reload) {
          location.reload()
        }
      }, 500);
    }
  }, [positionOne, positionTwo])


  function changeBoard() {

    let idx = Math.floor(Math.random() * allSnakes.length)
    console.log(idx);
    const currSnake = allSnakes[idx]
    const currLadder = allLadders[idx]

    let snp = currSnake.map(snake => snake[0])
    let ldp = currLadder.map(ladder => ladder[0])

    console.log(snakes);
    console.log(ladders);


    console.log('snp', snp);


    setSnakeP(snp)
    setLadderP(ldp)
    setSnakes(allSnakes[idx])
    setLadders(allLadders[idx])

  }


  function roll() {
    setChangeDisableButton(true)
    let val = Math.floor(Math.random() * 6 + 1)
    setDice(val)
    if (turn == 0) {
      if (!(positionOne + val > 100)) {
        setPositionOne(positionOne + val)
      }

      if (snakeP.includes(positionOne + val)) {
        setPositionOne(positionOne + val)
        setTimeout(() => {
          console.log('retracking back');

          setPositionOne(snakes[snakeP.indexOf(positionOne + val)][1])
        }, 500);
      }

      if (ladderP.includes(positionOne + val)) {
        setPositionOne(positionOne + val)
        setTimeout(() => {
          console.log('retracking back');
          setPositionOne(ladders[ladderP.indexOf(positionOne + val)][1])

        }, 500);
      }

    }
    else {
      if (!(positionTwo + val > 100)) {
        setPositionTwo(positionTwo + val)
      }

      if (snakeP.includes(positionTwo + val)) {
        setPositionTwo(positionTwo + val)
        setTimeout(() => {
          console.log('retracking back');

          setPositionTwo(snakes[snakeP.indexOf(positionTwo + val)][1])
        }, 500);
      }

      if (ladderP.includes(positionTwo + val)) {
        setPositionTwo(positionTwo + val)
        setTimeout(() => {
          console.log('retracking back');

          setPositionTwo(ladders[ladderP.indexOf(positionTwo + val)][1])
        }, 500);
      }
    }

    console.log('snakeP', snakeP);
    console.log('ladderP', ladderP);
    setTurn(!turn)

  }

  return (
    <>
      <div className='flex'>

      </div>
      <div className='flex m-2 justify-center'>

        <div className='p-2'>Player {turn + 1} 's turn </div>


        <button className='bg-blue-500 rounded-xl p-2 m-2 hover:bg-blue-300 disabled:cursor-not-allowed disabled:bg-blue-300' onClick={changeBoard} disabled={disableChangeBoardButton} >Change Board</button>
        <button className='bg-blue-500 rounded-xl p-2 m-2 hover:bg-blue-300 disabled:cursor-not-allowed disabled:bg-blue-300'> PvP</button>
        <input className='bg-blue-500 rounded-xl p-2 m-2 hover:bg-blue-300 ' type='checkbox' id = 'vsc'/> 
        <label htmlFor="vsc" className='py-2 my-2'>vs Computer</label>
        
      </div>
      <div className='flex m-2 justify-center flex-wrap '>
        <div className='grid grid-cols-10 grid-rows-10'>
          {grid.map((val) => (
            <GridItem key={val}
              value={val}
              isPlayerOneHere={val === positionOne}
              isPlayerTwoHere={val === positionTwo}
              id={`grid-item-${val}`}
            />
          ))}
        </div>

        {ladders.map((val, index) => (
          <LineConnector
            key={`line-${index}`}
            startId={`grid-item-${val[0]}`}
            endId={`grid-item-${val[1]}`}
          />
        ))}
        {snakes.map((val, index) => (
          <CurvedLineConnector
            key={`line-${index}`}
            startId={`grid-item-${val[0]}`}
            endId={`grid-item-${val[1]}`}
          />
        ))}
        <div className='flex'>

          <DiceComponent id={dice} onClick={roll} turn={!turn} />
        </div>
      </div>
    </>
  )
}

export default App
