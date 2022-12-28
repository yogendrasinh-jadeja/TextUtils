import React,{useState} from 'react'


export default function TextForm(props) {
    function countWords(str) {
        const arr = str.split(/\s+/);
        return arr.filter(word => word !== '').length;
      }
    const handleUpclick=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showalert("Converted To Uppercase!","success")
    }
    const handlelowclick=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showalert("Converted To Lowercase!","success")
    }
    const handleOnchange=(e)=>{
        setText(e.target.value);
    }
    const handleclrclick=()=>{
        let newtext=""
        setText(newtext)
        props.showalert("Text cleared!","success")
    }
    const handlecopyclick=()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Copied To Clipboard!","success")
    }
    const handleresclick=()=>{
        let ntext=text.split(/[ ]+/)
        setText(ntext.join(" "))
        props.showalert("Extra spaces removed!","success")
    }
    const [text, setText] = useState('');
    return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} className="form-control" onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlelowclick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclrclick}>Clear text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlecopyclick}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleresclick}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{countWords(text)} words and {text.length} characters</p>
        <p>{0.008*countWords(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
