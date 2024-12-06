const Contact=()=>{
    return(
        <div>
            <h2 className="font-bold text-3xl p-4 m-4">Contact Us</h2>
            {/* <h2>This is Navya Kattumuri.........</h2> */}
            <form>
                <input type="text" 
                className="border border-black p-2 m-2" 
                placeholder="Name"
                />
                <input type="text"
                 className="border border-black p-2 m-2"
                 placeholder="Message"
                 />
                <button
                 className="border border-black p-2 m-2 bg-gray-200 rounded-md">
                    Submit
                 </button>
            </form>
        </div>
    );
}

export default Contact;