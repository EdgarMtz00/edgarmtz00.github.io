import Navbar from '../../components/navbar/Navbar';

export default function Home() {
    return (
        <div className={"flex justify-center"}>
            <div className={"Home grid grid-cols-4 auto-rows-min gap-4  w-3/5"}>
                <div className={"col-span-full row-span-1"}>
                    <Navbar/>
                </div>
                <div className={"row-start-2 col-span-3 border-r-2 border-black"}>
                    <div className={"grid auto-rows-min grid-cols-4 gap-y-3 gap-x-7"}>
                        <h3 className={"row-start-1 col-span-full mb-3.5"}>
                            +3 years experienced software engineer in multiple technologies.
                            Mainly focused on fullstack web development and cloud technologies.
                        </h3>
                        <div className={"row-start-2 col-span-full mb-3.5 px-2"}>
                            <hr/>
                            <h2 className={"py-2"}>Work History</h2>
                            <hr/>
                        </div>
                        <div className={"grid gap-y-7 gap-x-5 row-start-3 col-span-full mb-3.5 px-2"}>
                            <div className={"flex flex-col row-start-1  col-span-1 px-2.5"}>
                                <h4 className={"self-center"}>2021-08</h4>
                                <h4 className={"self-center"}>-</h4>
                                <h4 className={"self-center"}>2023-03</h4>
                            </div>
                            <div className={"row-start-1 col-span-1"}>
                                <h3>
                                    Software Engineer <br/>
                                    Gray Wolf, Guadalajara
                                </h3>
                                <ul className={"list-disc mx-2.5 px-2"}>
                                    <li>
                                        Creation of Custom Application that integrate
                                        with shopify, to automate the handling of
                                        orders, new products, etc.
                                    </li>
                                    <li>
                                        In charge of implementing new features
                                        related to clients' store, such as integrating
                                        with third-party systems, updating third-party
                                        Apps configuration or behavior.
                                    </li>
                                </ul>
                            </div>

                            <div className={"flex flex-col row-start-2  col-span-1 px-2.5"}>
                                <h4 className={"self-center"}>2020-05</h4>
                                <h4 className={"self-center"}>-</h4>
                                <h4 className={"self-center"}>2021-07</h4>
                            </div>
                            <div className={"row-start-2 col-span-1"}>
                                <h3>
                                    Java Developer <br/>
                                    Freelancing IVR Systems Development, Guadalajara
                                </h3>
                                <ul className={"list-disc mx-2.5 px-2"}>
                                    <li>
                                        Build web services using Java EE or Spring 4.
                                    </li>
                                    <li>
                                        Design call flows for IVR systems using Cisco
                                        UCCX software.
                                    </li>
                                    <li>
                                        Implement UI with Bootstrap, JQuery, and
                                        Angular to improve ease of use for phone
                                        operators.
                                    </li>
                                </ul>
                            </div>

                            <div className={"flex flex-col  row-start-3  col-span-1 px-2.5"}>
                                <h4 className={"self-center"}>2019-09</h4>
                                <h4 className={"self-center"}>-</h4>
                                <h4 className={"self-center"}>2020-02</h4>
                            </div>
                            <div className={"row-start-3 col-span-1"}>
                                <h3>
                                    Backend Developer <br/>
                                    Software Solutions Company, Guadalajara
                                </h3>
                                <ul className={"list-disc mx-2.5 px-2"}>
                                    <li>
                                        Rest API Development with CakePHP and Laravel for 3 web applications
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={"row-start-4 col-span-full mb-3.5 px-2"}>
                            <hr/>
                            <h2 className={"py-2"}>Education</h2>
                            <hr/>
                        </div>

                        <div className={"grid gap-y-7 gap-x-5 row-start-5 col-span-full mb-3.5 px-2"}>
                            <div className={"flex flex-col  row-start-1  col-span-1 px-2.5"}>
                                <h4 className={"self-center"}>2015</h4>
                                <h4 className={"self-center"}>-</h4>
                                <h4 className={"self-center"}>2019</h4>
                            </div>
                            <div className={"row-start-1 col-span-1"}>
                                <h3>
                                    Software Development Technologist <br/>
                                    CETI Colomos - Guadalajara, Jalisco. Mexico
                                </h3>
                                <ul className={"list-disc mx-2.5 px-2"}>
                                    <li>
                                        Rest API Development with CakePHP and Laravel for 3 web applications
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={""}>
                    <img src={'io.jpg'} alt={'Edgar Martinez'}/>

                    <div className={"my-2"}>
                        <h2 className={"mb-2"}>Certifications</h2>
                        <h3>AWS Certified Cloud Practitioner (CLF)</h3>
                    </div>

                    <hr/>

                    <div className={"my-2"}>
                        <h2 className={"mb-2"}>Technical Profile</h2>
                        <ul className={"list-disc px-2"}>
                            <li><h4>Java</h4></li>
                            <li><h4>Javascript</h4></li>
                            <li><h4>Python</h4></li>
                            <li><h4>React</h4></li>
                            <li><h4>Express</h4></li>
                        </ul>
                    </div>

                    <hr/>

                    <div className={"my-2"}>
                        <h2 className={"mb-2"}>Languages</h2>
                        <ul className={"list-disc px-2"}>
                            <li><h4>Spanish (Native)</h4></li>
                            <li><h4>English (B2)</h4></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
