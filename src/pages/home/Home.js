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
                    <div className={"grid auto-rows-min grid-cols-4 gap-y-3 gap-x-5"}>
                        <h2 className={"row-start-1 col-span-full mb-3.5"}>A dedicated Full Stack Developer is looking
                            to join your team!</h2>
                        <div className={"row-start-2 row-span-2 col-span-1 flex flex-col gap-4"}>
                            <p>Hi! I'm Edgar, a developer with a passion for many
                                different fields of computer science and software engineering. Most of my working
                                experience
                                has been as a full stack developer, creating different kinds of web services and their
                                corresponding front end applications.
                            </p>
                            <p>I started learning to program
                                around {Math.abs(new Date(Date.now() - new Date('2014-01-01')).getUTCFullYear() - 1970)} years
                                ago when I
                                was 14 years old. Ever since that age I've studied, both in school and my free time,
                                many
                                different tools for developing, deploying and maintaining projects focused on web
                                consumption or even on web architecture.
                            </p>
                        </div>
                        <div className={"row-start-2 row-span-2 col-span-1 flex flex-col gap-4"}>
                            <p>As you can see this is my personal page which I use to
                                secure job interviews or to brag among my colleagues, but it doesn't matter how you get
                                to this page. Here you can check some personal projects I have been working on or
                                reference of the work I've made on the different places I worked on.</p>
                            <p>Apart from computers I'm interested on sports (like olympic games, american
                                football, some e-sports and obviously chess). I also like to cook many things although I usually
                                prefer to eat at good restaurants <nav className={"grey inline"}>😅</nav>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
