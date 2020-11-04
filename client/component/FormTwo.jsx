class FormTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name:"",
            email:"",
            password:""
        };
        this.next = this.next.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Shipping Information</h2>
                <form>
                    <label>Line 1<input name="line1"></input></label>
                    <br />
                    <br />
                    <label>Line 2<input name="line2"></input></label>
                    <br />
                    <br />
                    <label>City<input name="line3" ></input></label>
                    <br />
                    <br />
                    <label>State<input name="state" ></input></label>
                    <br />
                    <br />
                    <label>Zip Code<input name="zipCode" ></input></label>
                    <br />
                    <br />
                    <label>Phone Number<input name="phoneNum" ></input></label>
                    <hr />
                    <button class="nextForm" onClick="this.next">Next</button>

                </form>
            </div>
        )
    }
}

export default FormTwo;