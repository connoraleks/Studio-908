import '../css/ContactForm.css'

const ContactForm = () => {
    return (
        <div id="contact" className="contact">
            <div className="form-container">
                <h2>Contact details</h2>
                <p>Use this form to tell us about you.</p>
                <form>
                    <div className="form-group">
                        <input placeholder="Name" type="text" className="form-control-input" id="cname" required />
                    </div>
                    <div className="form-group">
                        <input placeholder="Email" type="email" className="form-control-input" id="cemail" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Message" className="form-control-textarea" id="cmessage" required defaultValue={""} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="form-control-submit-button">Submit Message</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default ContactForm;