import React from 'react';
import { ElementProvider } from './elementProvider';
import { LeftSiderProvider } from './leftSiderProvider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ProjectPageProvider = ({ children }) => {
    return (
        <DndProvider backend={HTML5Backend}>
            <ElementProvider>
                <LeftSiderProvider>
                    {children}
                </LeftSiderProvider>
            </ElementProvider>
        </DndProvider>
    );
};

export default ProjectPageProvider;
