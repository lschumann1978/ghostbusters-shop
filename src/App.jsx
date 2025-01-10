import { useState } from "react";
import "./App.css";
import Button from "./components/Button.jsx";
import List from "./components/List/List.jsx";
import TextInput from "./components/TextInput.jsx";

import { BrowserRouter as router, Routes, Route, Link } from "react-router-dom";
import Dropdown from "./components/Dropdown.jsx";

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("1");

    const products = [
        {
            id: 1,
            titleText: "Proton Pack",
            subTitleText: "Official Ghostbusters Proton Pack",
            image: `/assets/proton_pack.png`,
        },
        { id: 2, label: "Ray Stantz", value: "Ray Stantz" },
        { id: 3, label: "Egon Spengler", value: "Egon Spengler" },
        { id: 4, label: "Winston Zeddemore", value: "Winston Zeddemore" },
    ];

    const onClick = (e) => {
        setCount((count) => count + parseInt(text));
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-grow items-center justify-center">
                <h1 className="text-4xl font-bold">Ghostbusters Gear</h1>
                <img
                    src={`/assets/ghostbusters-logo_no_bkgnd.png`}
                    alt="Ghostbusters"
                    className="w-64 h-64 ml-6"
                />
            </div>

            <div className="card">
                <p className="count mb-3">You clicked {count} times</p>
                <TextInput
                    name="theText"
                    className="mr-3 border border-gray-300 rounded-md p-2"
                    value={text}
                    onBlur={(e) => setText(e.target.value)}
                />
                <Button
                    className={
                        "mb-3 bg-blue-400 text-white rounded-lg p-3 py-1"
                    }
                    onClick={onClick}
                >
                    Click me
                </Button>
                <Dropdown
                    classNames={"border border-blue-700 rounded-md p-2"}
                    listItems={[]}
                    labelText={"Pick your favorite Ghostbuster:"}
                    defaultValue="Select an Ghostbuster"
                    imageClassName="w-10 h-10"
                    onChange={(e) => console.log(e.target.value)}
                />
                <List
                    className={"flex flex-wrap"}
                    listItems={products}
                    imageClassName={"rounded-md py-2"}
                />
            </div>
        </div>
    );
}

export default App;
