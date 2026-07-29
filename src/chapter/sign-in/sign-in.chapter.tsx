import {ReactElement} from 'react';

import furtherRequestsImage from '@/assets/images/sign-in/further-requests.webp';
import jwtImage from '@/assets/images/sign-in/jwt.webp';

import ImageSlide, {ImageSize} from '@/slides/image/image.slide';

export default function SignInChapter(): ReactElement {
    const heading = 'Sign In' as const;

    return (
        <section>
            <ImageSlide heading={heading} imageSrc={jwtImage.src} caption="JSON Web Token (JWT)" />
            <ImageSlide
                heading={heading}
                imageSrc={furtherRequestsImage.src}
                imageSize={ImageSize.SMALL}
                caption="Further Requests"
            />
        </section>
    );
}
