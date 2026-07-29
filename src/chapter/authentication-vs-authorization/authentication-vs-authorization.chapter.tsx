import {ReactElement} from 'react';

import authenticationImage from '@/assets/images/authentication-vs-authorization/authentication.webp';
import authorizationImage from '@/assets/images/authentication-vs-authorization/authorization.webp';

import VersusSlide from '@/slides/versus/versus.slide';

export default function AuthenticationVsAuthorizationChapter(): ReactElement {
    return (
        <section>
            <VersusSlide
                heading="Authentication vs Authorization"
                columns={[
                    {
                        heading: 'Authentication',
                        imageSrc: authenticationImage.src,
                        description: 'Verifies the true identity of the user.',
                    },
                    {
                        heading: 'Authorization',
                        imageSrc: authorizationImage.src,
                        description: 'Determines what the user can access.',
                    },
                ]}
            />
        </section>
    );
}
