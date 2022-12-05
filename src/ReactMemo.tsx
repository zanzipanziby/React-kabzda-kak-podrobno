import React from 'react';


export const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

export const UsersSecret = (props: {users: Array<string>}) => {
    return (
        <div>
            {props.users.map((u,i) => {
                return (
                    <div key={i}>{u}</div>
                )
            } )}
        </div>
        )

}
export const Users = React.memo(UsersSecret)

