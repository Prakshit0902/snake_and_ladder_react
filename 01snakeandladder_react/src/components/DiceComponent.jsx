import die1 from '../assets/dieOne.svg'
import die2 from '../assets/dietwo.svg'
import die3 from '../assets/dieThree.svg'
import die4 from '../assets/dieFour.svg'
import die5 from '../assets/dieFive.svg'
import die6 from '../assets/dieSix.svg'



function DiceComponent({ id = 1,
    onClick,turn
}) {

    const getDie = (id) => {
        switch (id) {
            case 1:
                return die1
            case 2:
                return die2
            case 3:
                return die3
            case 4:
                return die4
            case 5:
                return die5
            case 6:
                return die6
            default:
                return die1
        }
    }

    return (
        <>
            <div>

                {id == 1 ?
                    <div onClick={onClick} className={turn?'bg-blue-500 m-2 rounded-2xl':'bg-red-500 m-2 rounded-2xl'} >
                        <img src={getDie(id)} />
                    </div>
                    : <div></div>
                }
                {id == 2 ?
                    <div onClick={onClick} className={turn?'bg-blue-500 m-2 rounded-2xl':'bg-red-500 m-2 rounded-2xl'} >
                        <img src={getDie(id)} />
                    </div>
                    : <div></div>
                }
                {id == 3 ?
                    <div onClick={onClick} className={turn?'bg-blue-500 m-2 rounded-2xl':'bg-red-500 m-2 rounded-2xl'} >
                        <img src={getDie(id)} />
                    </div>
                    : <div></div>
                }
                {id == 4 ?
                    <div onClick={onClick} className={turn?'bg-blue-500 m-2 rounded-2xl':'bg-red-500 m-2 rounded-2xl'} >
                        <img src={getDie(id)} />
                    </div>
                    : <div></div>
                }
                {id == 5 ?
                    <div onClick={onClick} className={turn?'bg-blue-500 m-2 rounded-2xl':'bg-red-500 m-2 rounded-2xl'} >
                        <img src={getDie(id)} />
                    </div>
                    : <div></div>
                }
                {id == 6 ?
                    <div onClick={onClick} className={turn?'bg-blue-500 m-2 rounded-2xl':'bg-red-500 m-2 rounded-2xl'} >
                        <img src={getDie(id)} />
                    </div>
                    : <div></div>
                }
            </div>
        </>
    )
}

export default DiceComponent