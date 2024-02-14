import { Outlet } from "react-router-dom";
import Button from "../components/Button";

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
                <Button>Go Back</Button>
                <Button>Next Step</Button>
            </div>
        </form>
    )
}