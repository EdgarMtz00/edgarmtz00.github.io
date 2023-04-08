import React from "react";

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
                        <a href="/"><b>Resume</b></a>
                    </div>
                    <div className={"nav-link"}>
                        <a href="/">{new Date(Date.now()).toDateString()}</a>
                    </div>
                    <div className={"nav-link"}>
                        <a href="/contact"><b>Contact</b></a>
                    </div>
                </div>
            </aside>
        </header>
    )
}

export default Navbar;
