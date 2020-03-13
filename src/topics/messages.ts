import { IMessage } from '@/topics/store';

export function useMessages(onMessageReceived: (this: WebSocket, message: IMessage) => void, onOpen?: (this: WebSocket, ev: Event) => void) {
    // Create websocket and listen to events
    const wss = new WebSocket('wss://echo.websocket.org');
    wss.addEventListener('open', function (ev) {
        console.log('Websocket initialized');
        if (onOpen) {
            onOpen.call(this, ev);
        }
    });
    wss.addEventListener('message', function (ev) {
        console.log('Message received:', ev);
        const data = JSON.parse(ev.data) as IMessage;
        onMessageReceived.call(this, data);
    });

    return {
        sendMessage: (message: IMessage) => {
            wss.send(JSON.stringify(message));
        },
        disposeUseMessages: () => {
            wss.close();
        },
    };
}