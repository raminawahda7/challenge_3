class FormOne extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this);
    }
    render() {
        return (
            <div>
                <h2>Create Account</h2>
                <form>
                    <label>Name<input name="name"></input></label>
                    <br />
                    <br />
                    <label>Email<input name="email" type="email"></input></label>
                    <br />
                    <br />
                    <label>Password<input name="password" type="password"></input></label>
                    <hr />
                    <button class="nextForm" onClick="this.next">Next</button>

                </form>
            </div>
        )
    }
}

export default FormOne;