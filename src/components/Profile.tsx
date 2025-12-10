import { FaLocationDot, FaEnvelope, FaLinkedin, FaGithub, FaSquareXTwitter } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import AnimateIn from './AnimateIn';
import ProgressiveImage from './ProgressiveImage';
import TiltEffect from './TiltEffect';
import Link from './Link';
import { IconType } from 'react-icons';

function ProfileLeft() {
    return (
        <AnimateIn
            className="mg:w-[250px] flex flex-col items-center justify-start gap-8 lg:w-[288px]"
            baseDelay={0.1}
            direction="left"
            staggerDelay={0.1}
        >
            <TiltEffect maxTiltDegrees={5} shadowIntensity={0.05}>
                <ProgressiveImage
                    lowResSrc="/images/profile-image-low.jpg"
                    highResSrc="/images/profile-image.jpg"
                    alt="Vinam Arora"
                    className="shadow-profile-pic w-[250px] rounded-4xl lg:w-[288px]"
                />
            </TiltEffect>

            <div className="flex flex-col items-center text-center text-lg font-medium">
                <p>Computer Science Ph.D. Student</p>
                <p>@ University of Pennsylvania</p>
                <div className="mt-2.5 flex flex-row items-center gap-1.5">
                    <FaLocationDot className="mb-0.5" />
                    <p>Philadelphia, PA, USA</p>
                </div>
            </div>
        </AnimateIn>
    );
}

interface SocialLinkProps {
    icon: IconType;
    label: string;
    href: string;
}

function SocialLink({ icon: Icon, label, href }: SocialLinkProps) {
    return (
        <div className="flex w-[70px] justify-center md:w-[80px] lg:w-[90px]">
            <Link href={href} aria-label={label} className="inline-block">
                <div className="flex flex-col items-center gap-1">
                    <Icon className="h-10 w-10" />
                    <p className="text-center">{label}</p>
                </div>
            </Link>
        </div>
    );
}

function SocialLinks() {
    return (
        <AnimateIn
            className="mt-8 flex flex-row flex-wrap justify-center gap-y-3 text-xs md:mt-2"
            baseDelay={0.5}
            staggerDelay={0.1}
            direction="up"
        >
            <SocialLink
                icon={FaGraduationCap}
                label="Google Scholar"
                href="https://scholar.google.com/citations?user=XHVqHR4AAAAJ&hl=en"
            />
            <SocialLink icon={FaGithub} label="Github" href="https://github.com/vinamarora8" />
            <SocialLink icon={FaSquareXTwitter} label="Twitter" href="https://x.com/vinam_arora" />
            <SocialLink
                icon={FaLinkedin}
                label="LinkedIn"
                href="https://www.linkedin.com/in/vinam-arora/"
            />
            <SocialLink icon={FaEnvelope} label="Email" href="mailto:vinam@seas.upenn.edu" />
        </AnimateIn>
    );
}

function ProfileRight() {
    return (
        <div className="flex w-full flex-col items-center font-normal">
            {/* Introduction text */}
            <AnimateIn baseDelay={0.2} direction="right" staggerDelay={0.05}>
                <p className="mb-5 text-justify text-base leading-[25px] md:text-lg">
                    I am a third year Computer Science Ph.D. student at the
                    University of Pennsylvania, where I conduct my research at{' '}
                    <Link href="https://nerdslab.github.io/" className="underline">
                        NerDS Lab
                    </Link>{' '}
                    and am advised by{' '}
                    <Link href="https://nerdslab.github.io" className="underline">
                        Prof. Eva Dyer
                    </Link>
                    .
                </p>
                <p className="mb-5 text-justify text-base leading-[25px] md:text-lg">
                    My research focuses on deep learning, with an emphasis on self-supervised
                    learning and large-scale data. I enjoy working with challenging datasets
                    and am developing new methods for computational neuroscience, graphs,
                    and time series. I also actively
                    develop <Link href="https://torchbrain.org" className="underline">torch_brain</Link>,
                    an open-source framework to accelerate deep learning for neuroscience.
                </p>
                <p className="mb-5 text-justify text-base leading-[25px] md:text-lg">
                    I did my undergrad in ECE from the Indian Institute
                    of Technology, Roorkee. Before diving into machine learning research, I used to work as a
                    chip-design engineer at Texas Instruments.
                </p>
            </AnimateIn>

            {/* Social links */}
            <SocialLinks />
        </div>
    );
}

export default function Profile() {
    return (
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start md:gap-14 lg:gap-18">
            <ProfileLeft />
            <ProfileRight />
        </div>
    );
}
