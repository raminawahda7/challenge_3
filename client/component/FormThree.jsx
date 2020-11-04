class FormThree extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            cardNumber:'',
            expiryDate:'',
            cvv:'',
            zipcode:''
        };
        this.next = this.next.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Credit Card :</h2>
                <form>
                    <label>Card Number<input name="crediNo"></input></label>
                    <br />
                    <br />
                    <label>Expiry Date <input name="name" type="date"></input></label>
                    <br />
                    <br />
                    <label>CVV<input name="cvv"></input></label>
                    <br />
                    <br />
                    <label>Billing Zip Code<input name="cvv"></input></label>
                    <hr />
                    <button class="nextForm" onClick={this.next}>Next</button>

                </form>
            </div>
        )
    }
}

export default FormThree;