import {ReactElement} from 'react';

import cookiesImage from '@/assets/images/storing-user-data/cookies.webp';
import cookiesMessageImage from '@/assets/images/storing-user-data/cookies-message.webp';
import cookiesVsSessionsVsLocalstorageImage from '@/assets/images/storing-user-data/cookies-vs-sessions-vs-localstorage.webp';
import rememberMeImage from '@/assets/images/storing-user-data/remember-me.webp';

import ImageSlide, {ImageSize} from '@/slides/image/image.slide';

export default function StoringUserDataChapter(): ReactElement {
    const heading = 'Storing User Data' as const;

    return (
        <section>
            <ImageSlide
                heading={heading}
                imageSrc={cookiesMessageImage.src}
                imageSize={ImageSize.MEDIUM}
                caption="Cookies Message"
            />
            <ImageSlide heading={heading} imageSrc={cookiesImage.src} caption="How Cookies Work?" />
            <ImageSlide heading={heading} imageSrc={cookiesVsSessionsVsLocalstorageImage.src} caption="" />
            <ImageSlide
                heading={heading}
                imageSrc={rememberMeImage.src}
                imageSize={ImageSize.MEDIUM}
                caption="Remember Me"
            />
        </section>
    );
}
