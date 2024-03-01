import '../../../projectPage/style/main.css'
import React from 'react';

function PreviewContainer({ componentNode, id }) {


    return (
        <>
            {
                componentNode &&
                <React.Fragment>
                    {componentNode.value && React.cloneElement(componentNode.value, { id })}
                    {componentNode.childrenElement &&
                        <div style={componentNode.styleObject}>
                            {
                                componentNode.childrenElement.map((item) => {
                                    return <PreviewContainer componentNode={item} key={item.id} ></PreviewContainer>
                                })
                            }
                        </div>
                    }

                </React.Fragment>
            }
            {
                (!componentNode || (!componentNode.value && !componentNode.childrenElement)) &&
                <div
                    className='board-container-tips'>
                    {'拖拽元素至此处'}
                </div>
            }

        </>
    );
}

export default PreviewContainer;
