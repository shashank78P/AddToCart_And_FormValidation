import { useContext } from "react";
import FormContext from "../store/formContext";

const FeedBack = () => {
    const formCtx = useContext(FormContext)
    const nameError = (formCtx.nameGotFocus && !formCtx.isName) ? "error" : ""
    const emailError = (formCtx.emailGotFocus && !formCtx.isEmail) ? "error" : ""
    const feedBackError = (formCtx.textAreaGotFocus && !formCtx.iSTextArea) ? "error textArea" : "textArea"
    return (
        <div className="formContainer">
            <div className="form">
                <form onSubmit={formCtx.SubmitForm}>
                    <div className="formRows flexCenter">
                        <div className="formFirstSection">
                            <input type="text" className={nameError}
                            onFocus={() => {
                                formCtx.nameGetFocus(true)
                            }} 
                            onChange={(e) => {
                                formCtx.verifyName(e.target.value)
                            }}
                            value={formCtx.name}
                            ></input>
                            <span>Full Name</span>
                        </div>
                        <div className="formFirstSection">
                            <input type="email" className={emailError}
                            onFocus={() => {
                                formCtx.emailGetFocus(true)
                            }}
                             onChange={(e) => {
                                formCtx.verifyEmail(e.target.value)
                            }}
                            value={formCtx.email}
                            ></input>
                            <span>Email</span>
                        </div>
                    </div>
                    <div className="formRows">
                        <textarea 
                        cols="40"
                        rows="5"
                        placeholder="FeedBack"
                        className={feedBackError}
                        onFocus={() => {
                            formCtx.textAreaGetFocus(true)
                        }} 
                        onChange={(e) => {
                            formCtx.verifyFeedBack(e.target.value)
                        }}
                        value={formCtx.textArea}
                        ></textarea>
                    </div>
                    <div>
                        <button className="submitButton">Submit</button>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default FeedBack;