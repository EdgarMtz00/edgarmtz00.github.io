import './Home.css';

import Navbar from '../../components/navbar/Navbar';

function Home() {
    return (
        <div className={"flex justify-center"}>
            <div className={"Home grid grid-cols-4 auto-rows-min gap-4  w-4/5"}>
                <div className={"col-span-full row-span-1"}>
                    <Navbar/>
                </div>
                <div className={"row-start-2 col-span-3 border-r-2 border-black"}>
                    <div className={"grid auto-rows-min grid-cols-4 gap-y-3 gap-x-7"}>
                        <h2 className={"row-start-1 col-span-full mb-3.5"}>A dedicated Full Stack Developer is looking
                            to join your team!</h2>
                        <div className={"row-start-2 row-span-2 col-span-1 flex flex-col gap-4"}>
                            <p>I've build my experience as a Full Stack developer creating different kinds of
                                websites and services both as a freelancer and a hired developer on 2 start ups. Most of
                                my experience comes from working as Full Stack web developer but I have also worked on
                                pure front-end for ecommerce and even developing webservices for call centers' systems.
                            </p>
                            <p>I have solid knowledge on javascript and some of its more common libraries and
                                frameworks like react, angular and jquery. I'm also well acquainted with different back
                                end frameworks being Spring (Java) and Express (Node) the ones I use the most, but I'm
                                proficient with Python and Php frameworks too and also have basic knowledge on .Net and
                                Rust developing.
                            </p>
                        </div>
                        <div className={"row-start-2 row-span-2 col-span-1 flex flex-col gap-4"}>
                            <p>
                                I'm currently studying Computer Engineering at the University of Guadalajara and have
                                been a Software Development Technologist
                                for {Math.abs(new Date(Date.now() - new Date('2019-01-01')).getUTCFullYear() - 1970)} years,
                                graduated from the Centro de Enseñanza Tecnica Industrial (CETI).</p>
                            <p> As you can see this is my personal page where I display some of my work and
                                sometimes post guides that I think will be useful for other developers specially for the
                                spanish speaking community. </p>
                            <p> If you are interested in contacting me to talk business you
                                can find all my related information here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
