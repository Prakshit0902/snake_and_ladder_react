import React from "react";



function GridItem({
    value,
    id,
    className,
    isPlayerOneHere,
    isPlayerTwoHere,
    haveSnake,
    snakePosition,
    ladderPosition,
    haveLadder,
}) {
    return (
        <>
        <div className='flex'>

            <div id={id} className='inline-flex flex-wrap outline outline-red-400 text-blue-300 bg-white-700 text-center h-15 w-15  align-middle'>
                {value}
                {isPlayerOneHere ?
                    <div className='justify-baseline h-4 w-4 rounded-full bg-blue-700'>
                    </div>
                    :
                    <div>

                    </div>}
                {isPlayerTwoHere ?
                    <div className='justify-baseline h-4 w-4 rounded-full bg-red-700'>
                    </div>
                    :
                    <div>

                    </div>}
            </div>
        </div>
        </>
    )
}

export default GridItem