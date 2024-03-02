import '../../../projectPage/style/main.css'
import OnlineContainer from './onlineContainer';

function OnlineBoard({component}) {

    return (
        <div>
            {component.map((children) => {
                return (
                    <OnlineContainer key={children.id} id={children.id} componentNode={children}></OnlineContainer>
                )
            })}
        </div>
    );
}

export default OnlineBoard;
