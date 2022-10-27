import react from 'react';

const Contact= () => {
    const [formStatus, setFormStatus] = react.useState('send');
    const onsubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');
        const {name, email, subject, message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
    } 
    console.log(details);
}
return(
    <div class='bg-success text-light'>
        <div className='text-center px-4 py-5'>
            <h1 className='text-center'>CONTACT US</h1>
            <h2 class='h2'>ADDRESS:</h2>
            <h4 class='h4'>LOREM IPSUM DOLOR SIT</h4>
            <h4 class='h4'>LOREM IPSUM DOLOR SIT</h4>
        </div>

        <form onSubmit={onsubmit} >
            <h2 class='text-center'> FOR GENERAL QUREIES, FILL OUT THE FORM</h2>
            <div class='d-flex px-4'>
            <div class='form-group col mt-4 mb-4 px-5 py-5'>
                <div className='mb-3'>
                    <label className="form-label" htmlFor="name">NAME</label>
                    <input className="form-control" type="text" id="name" required />
                </div>

                <div className="mb-3" >
                    <label className="form-label" htmlFor="email">EMAIL</label>
                    <input className="form-control" type="email" id="email" required />
                </div>

                <div className="mb-3" >
                    <label className="form-label" htmlFor="subject">SUBJECT</label>
                    <input className="form-control" type="text" id="subject" required />
                </div>        
            </div>
            <div class='col mt-4 mb-4 px-5 py-5'>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">MESSAGE</label>
                    <textarea className="form-control" id="message" required  rows={8}/>
                </div>
                <button className="btn btn-danger" type="submit">{formStatus}</button>

            </div>
        </div>

        </form>
    </div>
)}

export default Contact;