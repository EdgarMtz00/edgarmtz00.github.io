import Navbar from "../../components/navbar/Navbar";

export default function Contact() {
    return (
        <div className={"flex justify-center"}>
            <div className={"Home grid grid-cols-4 auto-rows-min gap-4  lg:w-3/5"}>
                <div className={"col-span-full row-span-1"}>
                    <Navbar/>
                </div>


                <div className={"flex gap-x-14 col-span-full row-span-1"}>
                    <h3>Email</h3>
                    <h4 className={"break-all"}><a href={"mailto:edgar.agustin.martinez@gmail.com"}>edgar.agustin.martinez@gmail.com</a></h4>
                    <h4></h4>
                </div>

                <div className={"flex gap-x-11 col-span-full row-span-1"}>
                    <h3>Github</h3>
                    <h4><a href={"https://www.github.com/EdgarMtz00"}>github.com/EdgarMtz00</a></h4>
                    <h4></h4>
                </div>

                <div className={"flex gap-x-6 col-span-full row-span-1"}>
                    <h3>Linkedin</h3>
                    <h4><a href={"https://www.linkedin.com/in/edgar-agustin-mtz-glez"}>linkedin.com/in/edgar-agustin-mtz-glez</a></h4>
                    <h4></h4>
                </div>
            </div>
        </div>
    );
}
