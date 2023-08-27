import React, { useState } from 'react'
import MainContent from './MainContent';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import axios from 'axios';



function InputBox() {

    const [text, setText] = useState();
    const [listeningbtn, setListningbtn] = useState(true);
    const [data, setData] = useState([]);
    const [description, setDescription] = useState();
    const [todo, setTodo] = useState();
    // const [formsee, Setformsee] = useState(false);


    
    
        // useEffect(()=>{
        //     fetch('http://localhost:9090/todos').then((val)=>val.json()).then((val)=>{setTodo(val) 
        //     console.log(val)}).catch((e)=>console.log(e))
        //     console.log(todo)
        // },[])
       
    

    // .................... Speech Recognisation ...........................


    const startListening = (e) => {
        e.preventDefault();
        setListningbtn(!listeningbtn);

        if (listeningbtn === true) {
            SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
        }
        else {
            SpeechRecognition.stopListening()
        }
    }
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }


    // ................................ on Listing Event color Change .........................................
    const ccs = listeningbtn ? { height: "40px", width: "130px", border: "none", outline: "none", borderRadius: "100px", backgroundColor: "orange", color: "white" } : { height: "40px", width: "130px", border: "none", outline: "none", borderRadius: "100px", backgroundColor: "red", color: "white" }



    // ................................ on CLICK Event Hanadal .........................................

    function inputhandal(e) {

        setText(e.target.value);
        console.log(e.target.value);
    }
    function descriptionhan(e) {
        setDescription(e.target.value || transcript);
        console.log(e.target.value);
    }
    function clickHandal(e) {
        e.preventDefault();

        // Setformsee(true);
        if (text === "" && transcript === "" && description === "") {
            return
        }
        setData(
            [...data, { Title: text, Description: description }]
        )
        setText("");
        setDescription("");
        resetTranscript();


    }
    function clickDelete(id) {
        console.log(id)
        setData(() => {
            return data.filter((ls, key, arr) => {
                return key !== id;
            })
        })
    }
    // const cssa =  formsee? "none" : "block"

    return (
        <>
            <div className="main-box">
                <div style={{ display: 'flex', padding: "10px 30px", borderRadius: "20px", backgroundColor: "#F8F8F6" }}>
                    <div className="input-div" > <input onChange={inputhandal} value={text} placeholder='Title' style={{ height: "40px", width: "500px", border: "none", background: "transparent", outline: "none" }} type="text" required /> </div>

                </div>




                <form style={{ display: "flex" }} >
                    <div>
                        <textarea name="textarea" onChange={descriptionhan} value={description || transcript} rows="5" placeholder="Description ... " cols="100" ></textarea>
                        <br />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div className="a-btn-div"> <button onClick={clickHandal} style={{ height: "40px", width: "80px", border: "none", outline: "none", borderRadius: "100px", backgroundColor: "green", color: "white" }}>Add</button> </div>
                            <div className="l-btn-div"> <button onClick={startListening} style={ccs}>{listeningbtn ? "Listing.." : "Stop Listning.."}</button>
                            </div>
                            <input type="reset" onClick={() => {

                                setDescription("");
                                resetTranscript()

                            }} style={{ backgroundColor: "red" }} name="submitInfo" value="Reset" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="bar">
                <h3>TODO's</h3> <p className="bar-1"></p>
            </div>
            <div className="main-Output">
                
                {
                    data.map((data, index, arr) => {
                        return <MainContent title={data.Title} description={data.Description} id={index} clickDelete={clickDelete} />
                    })
                }

        
            </div>
        </>
    )
}

export default InputBox