import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function AdminComponent({ addUser }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [position, setPosition] = useState("");
    const [users, setUsers] = useState([]);


    

    function handleSubmit(event) {
        event.preventDefault();
        const newUser = { id: Date.now(), name, lastName, position };
        addUser(newUser);
        setUsers([...users, newUser]);
        setName("");
        setLastName("");
        setPosition("");
        console.log(newUser);
    }

    const deleteUser = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };

    return (
        <div className="flex flex-col h-screen bg-gray-300 items-center">
            <div className="flex flex-col justify-center my-6 text-center">
                <h1 className="text-3xl font-bold">
                    Generation Thailand <br /> Admin Section
                </h1>
            </div>
            <div className="flex space-x-4">
                <Link to="/users" className="bg-gray-500 text-white font-semibold rounded-lg shadow-2xl px-4 py-2">
                    <button>User Section</button>
                </Link>
                <Link to="/admin" className="bg-gray-500 text-white font-semibold rounded-lg shadow-2xl px-4 py-2">
                    <button>Admin Section</button>
                </Link>
            </div>
            <div className="flex justify-between my-3">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="mx-1"></label>
                    <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className="rounded-lg border border-black shadow-xl opacity-75 pl-2"
                    />
                    <label htmlFor="lastName" className="mx-1"></label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        className="rounded-lg border border-black shadow-xl opacity-75 pl-2"
                        required
                    />
                    <label htmlFor="position" className="mx-1"></label>
                    <input
                        type="text"
                        name="position"
                        placeholder="Position"
                        value={position}
                        onChange={(event) => setPosition(event.target.value)}
                        className="rounded-lg border border-black shadow-lg opacity-75 pl-2"
                        required
                    />
                    <button
                        type="submit"
                        name="submit"
                        value="submit"
                        className="mx-3 bg-blue-600 rounded-lg px-3 shadow-xl"
                        required
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex w-full px-4">
                <table className="w-full border-collapse border border-gray-500">
                    <thead>
                        <tr>
                            <th className="border border-gray-500 px-4 py-2">Name</th>
                            <th className="border border-gray-500 px-4 py-2">Last Name</th>
                            <th className="border border-gray-500 px-4 py-2">Position</th>
                            <th className="border border-gray-500 px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border border-gray-500 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-500 px-4 py-2">{user.lastName}</td>
                                <td className="border border-gray-500 px-4 py-2">{user.position}</td>
                                <td className="flex border border-gray-500 px-4 py-2 justify-center">
                                    <div className="flex">
                                        <button className="bg-red-700 text-white px-2 py-1 rounded" onClick={() => deleteUser(user.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
