import { MessageType } from '@/models/message-type';
import { ref } from '@vue/composition-api';

export interface IState {
    userName: string;
    messages: IMessage[];
    message: string;
}

export interface IMessage {
    type: MessageType;
    userName: string;
    timeStamp: Date;
    message: string;
}

export function useStore() {
    return {
        state: ref<IState>({
            userName: '',
            message: '',
            messages: [],
        }),
    }
}