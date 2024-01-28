import '../../../index.css'
import { useDrop } from 'react-dnd';

function BoardConatiner({ handleDrop }) {

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: 'ELEMENT_ITEM',
        drop: (item) => handleDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),

    }));

    return (
        <div className={`board-container ${isOver ? 'board-container-hover' : ''}`} ref={dropRef}>

        </div>
    );
}

export default BoardConatiner;
