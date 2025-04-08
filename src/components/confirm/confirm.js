import './confirm.css'

const Confirm = (props) => {
    return (<button className='confirm'>
        {props.children}
    </button>)

}

export default Confirm