
export const activeDialog = (id) => {
    return {
        type: 'ACTIVE_DIALOG',
        id
    };
}

export const sendMessage = (text) => {
    return {
        type: 'SEND_MESSAGE',
        text
    };
}
