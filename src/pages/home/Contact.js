import Navbar from "../../components/navbar/Navbar";

export default function Contact() {
    return (
        <div className={"flex justify-center"}>
            <div className={"Home grid grid-cols-4 auto-rows-min gap-4  w-3/5"}>
                <div className={"col-span-full row-span-1"}>
                    <Navbar/>
                </div>

            </div>
        </div>
    );
}
