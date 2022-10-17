import imgProfile from '../../assets/windows/profile/davide-valsecchi.jpeg'
import { ArrowForwardOutline, Eye } from 'react-ionicons'
import { FormEvent, FormEventHandler, useEffect, useState } from 'react';

interface LockScreenPasswordProps {
    handleSuccess: (str : string) => void;
    handleHide: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function LockScreenPassword(props: LockScreenPasswordProps) {
    
    var [passwordVal, setPasswordVal] = useState<string>('');
    const [inputType, setInputType] = useState<string>();

    const passwordKeyDownHandler = (e: any) => {
        if (e.code === 'Enter'){
            props.handleSuccess(passwordVal)
        }
    }

    const handleSuccess = () => {
        props.handleSuccess(passwordVal)
    }

    const onPasswordInput = (event: FormEvent<HTMLInputElement>) => {
        setPasswordVal(event.currentTarget.value)
    }
    const showPassword = () => {
        setInputType('text')
    }
    const hidePassword = () => {
        setInputType('password')
    }

    useEffect(() => {
        hidePassword()
    }, [])

    return (<div className="lock-screen-password">
        <div className="image-container">
            <img src={imgProfile} alt='profile-image' />
        </div>
        <h3>Davide Valsecchi</h3>
        <div className='password-container'>
            <div className='input-wrapper'>
                <input type={inputType} onInput={onPasswordInput} value={passwordVal} onKeyDown={passwordKeyDownHandler} placeholder="Password" autoFocus />
            </div>
            <button className='eye' onMouseDown={showPassword} onMouseUp={hidePassword}><Eye color='white'></Eye></button>
            <button className='arrow' onClick={handleSuccess}><ArrowForwardOutline color='white'></ArrowForwardOutline></button>
        </div>
    </div>);
}

export default LockScreenPassword;