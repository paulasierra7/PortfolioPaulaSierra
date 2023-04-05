import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

function Projects() {
    return (
      <section>

                <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src="https://raw.githubusercontent.com/paulasierra7/Amazon-Copy-E-Commerce/8d4621aff5e996ccb4a2dbec4302ebac6d374eb6/proyectoFinal.gif" width="500" height="462" alt="Features bg" />
                </div>
                <div className="relative inline-flex flex-col">
                    <img className="md:max-w-none mx-auto rounded" src="https://github.com/paulasierra7/wheels-carpooling-app/blob/master/src/images/landing.gif?raw=true" width="500" height="462" alt="Features bg" />
                </div>



            {/* <div className="grid grid-cols-2 gap-2">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="">;
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt="">;
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt="">;
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" alt="">;
                    </div>
                </div> */}
    </section>
    );
}

export default Projects;

