import { useState } from "react";
import Background from "../Background";
import ContactForm from "./ContactForm";
import ThankyouPage from "./ThankyouPage";

const Contact = (props) => {
    const [toggleThankyou, setToggleThankyou] = useState(false);

    const formRender = () => {
        if (!toggleThankyou) return <ContactForm toggleThanks={setToggleThankyou} />;

        return (
            <ThankyouPage />
        );
    }

    return (
        <div className="sm:p-10">
            <Background />
            
            {formRender()}
        </div>
    );
}

export default Contact;