import Hero from '@/pages/Hero';
import LoveStory from '@/pages/LoveStory';
import Events from '@/pages/Events';
import Galery from '@/pages/Galery';
import Location from '@/pages/Location';
import Wishes from '@/pages/Wishes';
import Gifts from '@/pages/Gifts';
import WeddingInvitation from '@/pages/WeddingInvitation';

// Main Invitation Content
export default function MainContent() {
    return (
        <>
            <Hero />
            <WeddingInvitation />
            <Events />
            <Location />
            <LoveStory />
            <Galery />
            <Gifts />
            <Wishes />
        </>
    )
}