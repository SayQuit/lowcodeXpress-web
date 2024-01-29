import './index.css'

function TypeTag({ name, color, backgroundColor }) {
    return (
        <div className='tag' style={backgroundColor === '#FFFFFF' ? { backgroundColor, color, border: `1px solid ${color}` } : { backgroundColor, color }}>
            {name}
        </div>
    );
}

export default TypeTag;
