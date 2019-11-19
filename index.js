class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    countUp = () => {
        const stateCopy = {...this.state}
        const newCount = ++stateCopy.count
        this.setState({
            count: newCount
        })
    }

    countDown = () => {
        const stateCopy = {...this.state}
        const newCount = --stateCopy.count
        this.setState({
            count: newCount
        })
    }

    render() {
        const divStyle = {
            margin: 'auto',
            textAlign: 'center',
            fontSize: '50px',
            fontFamily: 'Helvetica'
        }
        const buttonStyle = {
            padding: '12px',
            background: 'blue',
            color: 'white',
            fontSize: '20px',
            width: '100px',
            border: 'none',
            borderRadius: '5px',
            margin: '5px'
        }
        return (
            <div style={ divStyle }>
                <h1>{ this.state.count }</h1>
                <button style ={ buttonStyle } onClick={ this.countUp }>+</button>
                <button style ={ buttonStyle } onClick={ this.countDown }>-</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'))