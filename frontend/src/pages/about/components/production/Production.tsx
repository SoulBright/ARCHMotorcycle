import * as React from 'react';

import s from './production.module.scss';

interface IProductionProps { };

export const Production: React.FC<IProductionProps> = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.img_container}>
          <img src={process.env.PUBLIC_URL + '/images/about/ARCH_production.jpg'} alt="Californian-dreaming" />
        </div>
        <div className={s.content}>
          <span>
            Every ARCH Motorcycle is a bespoke production motorcycle.
          </span>
          <p>
            <span>
              The ARCH KRGT-1, ARCH 1s and ARCH Method 143 utilize a collaborative process tailoring livery and ergonomic fit to each owner.
              Our clients are a part of the creative process from the beginning and work closely with our in-house designers to co-design their ARCH motorcycle.
            </span>
          </p>
          <p>
            <span>
              Collectively, we have logged over 100,000 development miles on a variety of roads.
              From collecting braking and suspension data along the twisty Angeles Crest Highway to testing comfort characteristics on PCH,
              or understanding acceleration loads on Southern California freeways, we incorporate our findings into making the overall riding experience better.
            </span>
          </p>
          <p>
            <span>
              The result is a versatile performance cruiser ready for carving the canyons or comfortably cruising long distances.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
