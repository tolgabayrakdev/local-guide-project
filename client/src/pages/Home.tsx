import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {

    return (
        <div>
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-2 text-white">
                        Smart Health Monitoring Wristwatch!
                    </h2>
                    <h3 className="text-2xl mb-8 text-gray-600">
                        The Gide app guides you to the places you visit and where you will vacation.
                    </h3>

                    <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                        Booking
                    </button>
                </div>
            </div>


            <section className="container mx-auto px-6 p-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Features
                </h2>
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Exercise Metric</h4>
                        <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch is able to capture you vitals while you exercise. You can create different category of exercises and can track your vitals on the go.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="https://res.cloudinary.com/tommypratama/image/upload/v1585723366/illustrration/undraw_online_articles_79ff_vjdpak.svg" alt="Monitoring" />
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
                        <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch can generate a comprehensive report on your vitals depending on your settings either daily, weekly, monthly, quarterly or yearly.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="https://res.cloudinary.com/tommypratama/image/upload/v1585723562/illustrration/undraw_report_mx0a_phbrsj.svg" alt="Reporting" />
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
                        <p className="text-gray-600 mb-8">Our Smart Health Monitoring Wristwatch allows you to sync data across all your mobile devices whether iOS, Android or Windows OS and also to your laptop whether MacOS, GNU/LInux or Windows OS.</p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="https://res.cloudinary.com/tommypratama/image/upload/v1585723624/illustrration/undraw_file_sync_ot38_ntk9nt.svg" alt="Syncing" />
                    </div>
                </div>
            </section>


            <section className="bg-gray-100">
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Testimonials
                    </h2>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">Monitoring and tracking my health vitals anywhere I go and on any platform I use has never been easier.</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">As an Athlete, this is the perfect product for me. I wear my Smart Health Monitoring Wristwatch everywhere i go, even in the bathroom since it's waterproof.</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 mb-4">
                            <div className="bg-white rounded shadow py-2">
                                <p className="text-gray-800 text-base px-6 mb-5">I don't regret buying this wearble gadget. One of the best gadgets I own!.</p>
                                <p className="text-gray-500 text-xs md:text-sm px-6">James Doe</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container mx-auto px-6 text-center py-20">
                    <h2 className="mb-6 text-4xl font-bold text-center text-dark">
                        Limited in Stock
                    </h2>
                    <h3 className="my-4 text-2xl text-dark">
                        Get yourself the Smart Health Monitoring Wristwatch!
                    </h3>
                    <button className="bg-dark font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
                        Pre Order
                    </button>
                </div>
            </section>


            <footer className="bg-gray-100">
                <div className="container mx-auto px-6 pt-10 pb-6">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/4 text-center md:text-left">
                            <h5 className="uppercase mb-6 font-bold">Links</h5>
                            <ul className="mb-4">
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">FAQ</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Help</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 text-center md:text-left">
                            <h5 className="uppercase mb-6 font-bold">Legal</h5>
                            <ul className="mb-4">
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Terms</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 text-center md:text-left">
                            <h5 className="uppercase mb-6 font-bold">Social</h5>
                            <ul className="mb-4">
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Linkedin</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 text-center md:text-left">
                            <h5 className="uppercase mb-6 font-bold">Company</h5>
                            <ul className="mb-4">
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Official Blog</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">About Us</a>
                                </li>
                                <li className="mt-2">
                                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}