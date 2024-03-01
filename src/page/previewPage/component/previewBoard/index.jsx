import '../../../projectPage/style/main.css'
import PreviewContainer from './previewContainer';

function PreviewBoard({component}) {

    return (
        <div>
            {component.map((children) => {
                return (
                    <PreviewContainer key={children.id} id={children.id} componentNode={children}></PreviewContainer>
                )
            })}
        </div>
    );
}

export default PreviewBoard;
