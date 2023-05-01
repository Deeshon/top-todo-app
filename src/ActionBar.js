import Modal from 'react-modal'
import { Component, useState } from 'react'

function ActionBar({handleSubmit}) {
    const [visible, setVisible] = useState(false)

    const changeVisibility = () => {
        if (visible === false) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }

    return (
        <div className="action-bar">
            <button id="add" onClick={changeVisibility}>Add task</button>
            <PopUp visible={visible} changeVisibility={changeVisibility} handleSubmit={handleSubmit}/>
            <button id='status'>Completed</button>
        </div>
    )
}

class PopUp extends Component {


    render() {
        const {visible, changeVisibility, handleSubmit} = this.props

        return (
            <Modal isOpen={visible} style={{
                overlay: {
        
                },
                
                content: {
                    width: "500px",
                    height: "200px",
                    borderRadius: "10px",
                    background: "aliceblue",
                    marginLeft: "30%",
                    marginTop: "13%",
                }
            }}>
                <h2 style={{color: "lightslategrey", marginTop: "-2px"}}>Add TODO</h2>
                <form>
                    <input type='text' placeholder='Title' name='title' id='title'></input>
                    <p id='msg' style={{color: "red", opacity: '0'}}>*This field is required</p>
                    <input type='button' value="Add Task" onClick={() => {
                            const title = document.getElementById("title").value
                            if (title === "" ) {
                                const msg = document.getElementById("msg")
                                msg.style.opacity = 1
                                return
                            }
                            const item = {
                                title: title,
                                status: 0
                            }
                            handleSubmit(item)
                            this.setState(this.initialState)
                            changeVisibility()
                    }}></input>
                    <button onClick={changeVisibility}>Close modal</button>
                </form>

            </Modal>
        )
    }
}

export default ActionBar