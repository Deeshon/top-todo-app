function Item({item, index, removeItem, checkItem}) {
    var title = ""
    if (item.status === 0) {
        title = item.title
    } else {
        for (let i = 0; i < item.title.length; i++) {
            title += item.title[i] + '\u0336'
        }
    }
    return (
        <div className="item">
            <div>
                <input type="checkbox"onClick={() => checkItem(index)}></input>
            </div>
            <div><p key={index}>{title}<br></br><span>22:46PM 4/3/23</span></p></div>
            <div style={{marginLeft: "40%", position: "fixed"}}><button id="del-item" onClick={() => removeItem(index)}>X</button> </div>
        </div>
    )
}

function Container({items, removeItem, checkItem}) {
    return (
        <div className="container">
{            items.map((item, index) => {
                return <Item item={item} index={index} removeItem={removeItem} checkItem={checkItem} />
            })}
        </div>
    )

}

export default Container