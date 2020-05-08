import { IMessage } from '@/topics/store';
import { onUnmounted, ref } from '@vue/composition-api';
import { MessageType } from '@/models/message-type';

export enum ConnectionState {
    Closed,
    Open,
}

export function useMessages(onMessageReceived: (message: IMessage) => void) {
    const connectionState = ref(ConnectionState.Closed);

    // Create websocket and listen to events
    const wss = new WebSocket('wss://echo.websocket.org');
    wss.addEventListener('open', function (ev) {
        console.log('Websocket initialized');
        connectionState.value = ConnectionState.Open;
    });
    wss.addEventListener('close', function (ev) {
        console.log('Websocket closed');
        connectionState.value = ConnectionState.Closed;
    });
    wss.addEventListener('message', function (ev) {
        console.log('Message received:', ev);
        const data = JSON.parse(ev.data) as IMessage;
        onMessageReceived(data);
    });

    // Close the connection when the component goes out of scope
    onUnmounted(() => wss.close());

    return {
        connectionState,
        sendMessage: (message: string) => {
            var send: IMessage = {
                message: message,
                timeStamp: new Date(),
                type: MessageType.Other,
                userName: 'Test user',
            };
            wss.send(JSON.stringify(message));
        },
    };
}