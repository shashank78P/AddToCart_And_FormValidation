import { useState } from "react";
import FormContext from "./formContext";

const FormContextProvider = (props) => {
    const [name, setName] = useState("")
    const [isName, setISName] = useState(false)
    const [nameGotFocus, setNameGotFocus] = useState(false)
    const [email, setEmail] = useState('')
    const [isEmail, setISEmail] = useState(false)
    const [emailGotFocus, setEmailGotFocus] = useState(false)
    const [textArea, setTextArea] = useState('')
    const [iSTextArea, setISTextArea] = useState(false)
    const [textAreaGotFocus, setTextAreaGotFocus] = useState(false)

    function nameGetFocus(item) {
        setNameGotFocus(item)
    }


    function emailGetFocus(item) {
        setEmailGotFocus(item)
    }


    function textAreaGetFocus(item) {
        setTextAreaGotFocus(item)
    }

    function verifyName(item) {
        if (nameGotFocus && item.trim().length > 2) {
            setISName(true)
            setName(item)
        }
        else{
            setISName(false)
            setName(item)
        }
    }


    function verifyEmail(item) {
        if (emailGotFocus && /\w{1,5}@gmail.com/.test(item.trim())) {
            setEmail(item)
            setISEmail(true)
        }
        else{
            setEmail(item)
            setISEmail(false)
        }
    }


    function verifyFeedBack(item) {
        if (textAreaGotFocus && item.trim().length > 10) {
            setTextArea(item)
            setISTextArea(true)
        }
        else{
            setTextArea(item)
            setISTextArea(false)
        }
    }
    function SubmitForm(e){
        e.preventDefault()
        if (nameGotFocus && emailGotFocus && textAreaGotFocus && isEmail && isName && iSTextArea) {
            let message = ` name: ${name} \n email: ${email} \n feeback: ${textArea}`
            alert(message)
            nameGetFocus(false)
            emailGetFocus(false)
            textAreaGetFocus(false)
            verifyEmail("")
            verifyName("")
            verifyFeedBack("")
        }
    }

    return (
        <FormContext.Provider
            value={{
                verifyName,
                verifyEmail,
                verifyFeedBack,
                nameGotFocus,
                emailGotFocus,
                textAreaGotFocus,
                isEmail,
                isName,
                iSTextArea,
                nameGetFocus,
                emailGetFocus,
                textAreaGetFocus,
                SubmitForm,
                name,
                email,
                textArea
            }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;