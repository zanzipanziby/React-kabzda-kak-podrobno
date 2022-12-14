import React, {useMemo, useState} from "react";


export const UsersSecret = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => {
                return (
                    <div key={i}>{u}</div>
                )
            })}
        </div>
    )

}
export const Users = React.memo(UsersSecret)


export const HelpForReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Misha", "Vera", "Svetlana", "Jura"])


    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => setUsers([...users, 'babaika'])
    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={addUser}>add</button>
            {counter}
            <Users users={newArray}/>
        </div>
    )
}