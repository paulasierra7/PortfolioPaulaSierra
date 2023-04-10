import React, {useState, useRef, useEffect} from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

function Features() {

    const [tab, setTab] = useState(1);

    const tabs = useRef(null);

    const marginStyle = {
        margin: '20px'
    };

    const marginStyle2 = {
        margin: '5px'
    };

    const heightFix = () => {
        if (tabs.current.children[tab]) {
            tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
        }
    }

    useEffect(() => {
        heightFix()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tab])

    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Javascript and React.js Projects</h1>
                        <p className="text-xl text-gray-600">
                            I have created the following projects:</p>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6 row">
                        {/* Tabs items */}

                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 col flex" data-aos="zoom-y-out"
                            ref={tabs}>
                            <div className="relative flex flex-col text-center lg:text-right "
                                style={marginStyle}>
                                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl flex-1-1-1">
                                    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">E-commerce in Javascript</h4>
                                    <div>
                                        <a href="https://amazon-ecommerce-chi.vercel.app/" target="_blank" rel="noopener noreferrer">
                                            <img className="md:max-w-none object-center rounded col "
                                                style={marginStyle2}
                                                src="https://raw.githubusercontent.com/paulasierra7/Amazon-Copy-E-Commerce/8d4621aff5e996ccb4a2dbec4302ebac6d374eb6/proyectoFinal.gif"
                                                width="500"
                                                height="462"/>
                                        </a>
                                        <div className="flex flex-grow">
                                            <ul className="flex flex-grow justify-end flex-wrap items-center">
                                                <li>
                                                    <a className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out" href="https://github.com/paulasierra7/Amazon-Copy-E-Commerce">View code</a>
                                                </li>
                                                <li>
                                                    <a className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3" href="https://amazon-ecommerce-chi.vercel.app/">
                                                        <span>View website</span>
                                                        <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero"/>
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 col" data-aos="zoom-y-out"
                                ref={tabs}
                                style={marginStyle}>
                                <div className="relative flex flex-col text-center lg:text-right">
                                    <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl flex-2">
                                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">App landing page in React.JS</h4>
                                        <div>
                                            <a href="https://wheels-carpooling-app.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                <img className="md:max-w-none object-center rounded col "
                                                    style={marginStyle2}
                                                    src="https://github.com/paulasierra7/wheels-carpooling-app/blob/master/src/images/landing.gif?raw=true"
                                                    width="500"
                                                    height="500"
                                                    alt="Features bg"/>
                                            </a>
                                            <div className="flex flex-grow">
                                                <ul className="flex flex-grow justify-end flex-wrap items-center">
                                                    <li>
                                                        <a className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out" href="https://github.com/paulasierra7/Amazon-Copy-E-Commerce">View code</a>
                                                    </li>
                                                    <li>
                                                        <a className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3" href="https://amazon-ecommerce-chi.vercel.app/">
                                                            <span>View website</span>
                                                            <svg className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero"/>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
