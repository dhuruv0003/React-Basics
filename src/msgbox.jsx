// Show a HEllo MEssage to the user in different colors.
// Pass 2 values as props: userName &textColor

function Activity({ userName, textColor }) {
    let newcolor = { color:textColor }
    return (
        <div >
            <h1 style={newcolor}>Hello!! {userName}</h1>
        </div>
    );
}

export default Activity;