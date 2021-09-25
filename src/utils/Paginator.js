import us from './Paginator.module.css'
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {
    let pages = [];

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionFrenge = portionNumber * portionSize - portionSize;
    let rightPortionFrenge = portionNumber * portionSize;

    return (
            <div className={us.numerationPages}>
                {portionNumber > 1 && <button onClick={() => {setPortionNumber(1)}} >&lt;&lt;</button>}
                {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>&lt;</button>}
                {pages.map(p => {
                    if((p <= rightPortionFrenge) && (p > leftPortionFrenge)) {
                    return <span onClick={() => onPageChanged(p)}
                                 className={p === currentPage && us.selectedPage}>{p}</span>
                }else {return false;}
                })}
                {portionNumber != portionCount && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>&gt;</button>}
                {portionNumber != portionCount && <button onClick={() => {setPortionNumber(portionCount)}}>&gt;&gt;</button>}

            </div>
    )
}

export default Paginator;