import './LockScreen.css'
import lockScreenImg from '../../assets/windows/backgrounds/lock-screen.jpg'
import DateTimePage from './DateTimePage';
import LockScreenPassword from './LockScreenPassword';
import { useEffect, useState } from 'react';

interface LockScreenProps {
    enabled: boolean;
    status?: 'idle' | 'loading' | 'failed';
    openWindows: (str : string) => void;
}

function LockScreen(props: LockScreenProps) {

    const [hiddenPassword, setHiddenPassword] = useState<boolean>();

    function showPassword() {
        if (!hiddenPassword) {
            console.log('showPassword')
            setHiddenPassword(true);
        }
    }
    function hidePassword() {
        if (hiddenPassword) {
            console.log('hidePassword')
            setHiddenPassword(false);
        }
    }

    return (<div className={'lock-screen ' + (hiddenPassword ? 'hide-password' : '')}>
        <div className='background' style={{ backgroundImage: `url(${lockScreenImg})` }}></div>
        <DateTimePage handleSuccess={showPassword} />
        <LockScreenPassword handleHide={hidePassword} handleSuccess={props.openWindows} />
    </div>);
}

export default LockScreen;