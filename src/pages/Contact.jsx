function Contact() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email envoyé par ${email}: ${message}`);
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="email" placeholder="Votre email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
                <textarea placeholder="Votre message" value={message} onChange={(e) => setMessage(e.target.value)} className="border p-2 rounded" required />
                <button type="submit" className="bg-blue-500 text-white py-2 rounded">Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;