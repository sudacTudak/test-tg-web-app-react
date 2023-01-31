import { useEffect } from 'react';

const tg = (window as any).Telegram?.WebApp;

export const useTelegram = () => {
    const onClose = () => {
        tg.close();
    };

    const onToggleButton = () => {
        if (tg.MainButton?.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}