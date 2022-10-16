import imgProfile from '../../assets/windows/profile/davide-valsecchi.jpeg'
import { ArrowForwardOutline } from 'react-ionicons'
import { useEffect, useState } from 'react';

interface LockScreenPasswordProps {
    handleSuccess: React.MouseEventHandler<HTMLButtonElement>;
    handleHide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function LockScreenPassword(props: LockScreenPasswordProps) {

    const passwordKeyDownHandler = (e: any) => {
        if (e.code === 'Enter'){
            props.handleSuccess(e)
        }
    }

    const [inputType, setInputType] = useState<string>('');

    useEffect(() => {
        setInputType('password');
    }, [])

    return (<div className="lock-screen-password">
        <div className="image-container">
            <img src={imgProfile} alt='profile-image' />
        </div>
        <h3>Davide Valsecchi</h3>
        <div className='password-container'>
            <div className='input-wrapper'>
                <input type={inputType} onKeyDown={passwordKeyDownHandler} placeholder="Password" autoFocus />
            </div>
            <button onClick={props.handleSuccess}><ArrowForwardOutline color='white'></ArrowForwardOutline></button>
        </div>
    </div>);
}

export default LockScreenPassword;