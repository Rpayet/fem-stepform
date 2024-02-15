import { Link, Outlet, useLocation } from "react-router-dom";

export default function SubscribeForm() {
    const location = useLocation();
    const step = location.pathname.match(/\/step(\d+)/)?.[1];

    return (
        <form id='sub-form'>
            <div className='steps-ariane'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>

            <Outlet />

            {/** Todo - URL Provider */}
            <div className='btn-form-nav'>
                {!window.location.pathname.includes('/step1') && <Link to={`/step${parseInt(step) - 1}`} >Go Back</Link>}
                <Link to={`/step${parseInt(step) + 1}`} >Next Step</Link>
                <Link to={'/confirm'}>Confirm</Link>
            </div>
        </form>
    );
}