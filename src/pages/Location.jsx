import config from "@/config/config";
import { Clock, Navigation as NavigationIcon, MapPin, CalendarCheck, Phone, ExternalLink, X, } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { formatEventDate } from '@/lib/formatEventDate';

const Modal = ({ isOpen, onClose, children }) => {
    if (typeof window === 'undefined') return null; 
    
    return ReactDOM.createPortal(
        <AnimatePresence>
        {isOpen && (
            <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-sm"
            >
                <div className="bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-2xl border border-gray-100">
                {children}
                </div>
            </motion.div>
            </>
        )}
        </AnimatePresence>,
        document.body 
    );
};

export default function Location() {
    const [embed, setEmbed] = useState("");
    const [direction, setDirection] = useState("");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const regex = /2d(-?\d+\.\d+).*3d(-?\d+\.\d+)/;
        const srcRgx = `src="([^"]+)"`;

        const match = config.event?.venue?.maps_embed ? config.event.venue.maps_embed.match(regex) : null;
        const srcMatch = config.event?.venue?.maps_embed ? config.event.venue.maps_embed.match(srcRgx) : null;

        if (srcMatch) {
            setEmbed(srcMatch[1]);
        }

        if (match) {
            const lng = match[1];
            const lat = match[2];
            const directionLink = `https://www.google.com/maps/dir//${lat},${lng}`;
            setDirection(directionLink);
        }
    }, [config.event?.venue?.maps_embed]);

    return (<>
        {/* Location section */}
        <section id="location" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white">
            {/* Decorative Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 py-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-rose-500 font-medium"
                    >
                        Wedding Venue
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Location
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <MapPin className="w-5 h-5 text-rose-400" />
                        <div className="h-[1px] w-12 bg-rose-200" />
                    </motion.div>
                </motion.div>

                {/* Location Content */}
                <div className="max-w-6xl mx-auto grid md:grid-row-2 gap-8 items-center">
                    {/* Map Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border-8 border-white"
                    >
                        <iframe
                            src={embed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </motion.div>

                    {/* Venue Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-serif text-gray-800 mb-6">{config.event.venue.name}</h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                                    <p className="text-gray-600 flex-1">{config.event.venue.address}</p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <CalendarCheck className="w-5 h-5 text-rose-500" />
                                    <p className="text-gray-600">{formatEventDate(config.event.venue.date, "full")}</p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Clock className="w-5 h-5 text-rose-500" />
                                    <p className="text-gray-600">{config.event.venue.time}</p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Phone className="w-5 h-5 text-rose-500" />
                                    <p className="text-gray-600">{config.event.venue.phone}</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-2 pt-4">
                                    <motion.a
                                        href={direction}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-1.5 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors text-sm"
                                    >
                                        <NavigationIcon className="w-3.5 h-3.5" />
                                        <span>Directions</span>
                                    </motion.a>

                                    <motion.a
                                        href={config.event.venue.maps_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center justify-center gap-1.5 bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        <span>View Map</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowModal(true)}
                            className="text-gray-600 hover:text-gray-800 w-full"
                        >
                            <div className="bg-rose-50/50 rounded-xl p-3 border border-rose-100">
                                <p className="text-rose-600 text-sm text-center">
                                    <span className="font-medium">Note:</span> Adab Menghadiri Walimah
                                </p>
                            </div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            >
                <div className="space-y-6 ">
                    <div className="flex justify-between  items-center">
                        <h3 className="text-xl font-semibold text-gray-800">Adab Menghadiri Walimah</h3>
                        <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowModal(false)}
                        className="text-gray-500 hover:text-gray-700"
                        >
                        <X className="w-5 h-5" />
                        </motion.button>
                    </div>

                    <div className="text-center">
                        <div className="text-sm font-semibold mb-1">
                            {`Mendoakan keberkahan bagi kedua mempelai`}
                        </div>
                        <div className="text-xs mb-2">
                            {`Salah satu doa yang disunnahkan diucapkan adalah:`}
                        </div>
                        <div className="mb-2 text-rose-500">
                            {`بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ`}
                        </div>
                        <div className="text-xs italic mb-4">
                            {`"Semoga Allah memberikan keberkahan kepadamu, memberkahi atasmu, dan mengumpulkan kalian berdua dalam kebaikan". (HR. Abu Daud No.2130)`}
                        </div>

                        <div className="text-sm font-semibold mb-1">
                            {`Mendoakan Shohibul Hajat setelah makan`}
                        </div>
                        <div className="text-xs mb-2">
                            {`Diantara doa yang disunnahkan untuk dibaca adalah:`}
                        </div>
                        <div className="mb-2 text-rose-500">
                            {`اللَّهُمَّ اغْفِرْ لَهُمْ وَارْحَمْهُمْ وَبَارِكْ لَهُمْ فِيمَا رَزَقْتَهُمْ وَبَارِكْ لَهُمْ فِيمَا آتَيْتَهُمْ`}
                        </div>
                        <div className="text-xs italic mb-4">
                            {`"Ya Allah, ampunilah mereka, rahmatilah mereka, berkahilah mereka atas apa yang telah Engkau rezekikan kepada mereka, dan berkahilah mereka atas apa yang telah Engkau berikan kepada mereka". (HR. Ahmad IV/188)`}
                        </div>

                        <div className="text-xs mb-2">
                            {`Atau boleh pula dengan doa :`}
                        </div>
                        <div className="mb-2 text-rose-500">
                            {`اللَّهُمَّ أَطْعِمْ مَنْ أَطْعَمَنِي، وَاسْقِ مَنْ سَقَانِي`}
                        </div>
                        <div className="text-xs italic">
                            {`"Ya Allah, berilah makan kepada orang yang telah memberi aku makan, dan berilah minum kepada orang yang telah memberi aku minum". (HR. Muslim No 255)`}
                        </div>
                    </div>
                </div>
            </Modal>
        </section>
    </>)
}