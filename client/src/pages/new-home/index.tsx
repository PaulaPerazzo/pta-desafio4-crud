import {Foto} from '../../assets';
import "./style.css";

export const Page = () => {

    function changeTxt(){
        let text = document.getElementById("text");
        if(text) {
            if(text.innerHTML === "") {
                text.innerHTML = "os amores da minha vida";
            } else {
                text.innerHTML = "";
            }
        }
    }

    return (
        <>
            <div className="card">
                <h1>bem vindes</h1>
                <img src={Foto} alt="" />
                <p id='text'></p>
                <button onClick={changeTxt}>Saiba mais</button>
            </div>
        </>
    )
}
