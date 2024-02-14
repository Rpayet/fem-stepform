import { Outlet } from "react-router-dom";

export default function SubscribeForm() {
    return (
        <form>
            <div className='steps-ariane'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
            </div>
            <Outlet />
            <button>Go Back</button>
            <button>Next Step</button>
        </form>
    )
}