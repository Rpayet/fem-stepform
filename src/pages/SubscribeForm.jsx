import { Link, Outlet } from "react-router-dom";

export default function SubscribeForm() {
    return (
        <form id='sub-form'>
            <div className='steps-ariane'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>

            <Outlet />

            <div className='btn-form-nav'>
                <Link to="/" >Go Back</Link>
                <Link to="/step3">Next Step</Link>
            </div>
        </form>
    )
}