import React from 'react';

const Notification = ({notification}) => {
    if (notification.message === null) {
        return null
    }

    const notificationStyle = {
        color: 'green',
        background: 'lightgray',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
}

    if (notification.isError) {
        notificationStyle.color = 'red'
        console.log('setting colour to red')    
    }
    return (
        <div style={notificationStyle}>
            {notification.message}
        </div>
    )
}

export default Notification