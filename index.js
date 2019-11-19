class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    countUp = () => {
        const stateCopy = {...this.state}
        console.log(stateCopy)
        const newCount = stateCopy.count + 1
        console.log(newCount)
        this.setState({
            count: newCount
        })
    }

    countDown = () => {
        const stateCopy = {...this.state}
        console.log(stateCopy)
        const newCount = stateCopy.count - 1
        console.log(newCount)
        this.setState({
            count: newCount
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.count }</h1>
                <button onClick={ this.countUp }>+</button>
                <button onClick={ this.countDown }>-</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'))