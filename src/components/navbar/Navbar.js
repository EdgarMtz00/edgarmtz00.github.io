import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <header className={"flex flex-col gap-2 align-middle mb-3"}>
            <div className={"bg-transparent px-2 sm:px-4 py-2.5 rounded"}>
                <div className={"flex justify-center mt-2"}>
                    <div className="col-span-2">
                        <h1 className={"title"}>Edgar Martinez</h1>
                    </div>
                </div>
            </div>
            <aside className={"border-t-2 border-b-2 border-black p-1 w-full self-center"}>
                <div className={"border-t border-b border-black p-3 flex justify-around"}>
                    <div className={"nav-link"}>
                        <Link to="/"><b>Resume</b></Link>
                    </div>
                    <div className={"nav-link"}>
                        {new Date(Date.now()).toDateString()}
                    </div>
                    <div className={"nav-link"}>
                        <Link to="/contact"><b>Contact</b></Link>
                    </div>
                </div>
            </aside>
        </header>
    )
}

export default Navbar;
