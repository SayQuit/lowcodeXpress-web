import '../../index.css'
import BoardConatiner from './component/boardContainer';

function ProjectBoard() {
    const handleDrop = (item) =>{
        console.log(item);
    }
    return (
        <div className="project-main-board">
            <BoardConatiner handleDrop={handleDrop}></BoardConatiner>
        </div>
    );
}

export default ProjectBoard;
