import { Send } from "lucide-react";

const ContactButton = ({emailTo}) => {
    const handleContact = () => {
        window.location.href = `mailto:${emailTo}`;
    };
    return (
        <button
            className="border border-cyan-400 px-8 py-4 rounded-full font-semibold hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2"
            onClick={handleContact}
        >
            <Send size={20} />
            Contact
        </button>
    )
}

export default ContactButton;