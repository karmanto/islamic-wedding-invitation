import config from '@/config/config'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function WeddingInvitation() {
    const heartCount = window.innerWidth / 100 * 3;

    const FloatingHearts = () => {
        return (
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(parseInt(heartCount))].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight * 2
                        }}
                        animate={{
                            opacity: [0, 0.3, 0.6, 0.3, 0],
                            scale: [0.5, 1, 0.5],
                            x: Math.random() * window.innerWidth,
                            y: -100
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeOut"
                        }}
                        className="absolute"
                    >
                        <Heart
                            className={`w-${Math.random() * 3 + 3} h-${Math.random() * 3 + 3} ${i % 3 === 0 ? 'text-rose-400' :
                                i % 3 === 1 ? 'text-pink-400' :
                                    'text-red-400'
                                }`}
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>
        );
    };

    return (
        <>
            {/* Event Section */}
            <section id="weddingInvitation" className="min-h-screen relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4 py-10"
                >
                    <FloatingHearts />

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-20"
                    >
                        <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="space-y-4 mx-auto mb-10"
                        >
                            <img
                                src="/images/bismillah.svg"
                                alt="basmallah"
                                className="w-full h-[35px] object-fit"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 mx-auto whitespace-pre-line"
                        >
                            {config.couple?.weddingInvitation}
                        </motion.p>
                    </motion.div>

                    {/* Groom Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col items-center justify-between mb-8"
                    >
                        {/* Groom Image */}
                        <div className="flex flex-col items-center space-y-4 mb-4">
                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="/images/groom.jpg"
                                    alt="The Groom"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Groom Info */}
                        <div className="text-center">
                            <h3 className="text-2xl font-medium text-rose-500 mb-2">{config.couple?.groomFullName}</h3>
                            <p className="text-gray-600">Putra {config.couple?.groomSibling} dari</p>
                            <p className="text-gray-700 font-medium">Bapak {config.couple?.groomFather} &</p>
                            <p className="text-gray-700 font-medium">Ibu {config.couple?.groomMother}</p>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="mb-8 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col items-center justify-between mb-5"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <Heart className="w-12 h-12 text-rose-500 mx-auto" fill="currentColor" />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Bride Section */}
                    <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.3, delay: 1.3 }}
                            className="flex flex-col items-center justify-between mb-10"
                    >
                        {/* Bride Image */}
                        <div className="flex flex-col items-center space-y-4 mb-4">
                            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                                <img
                                    src="/images/bride.jpg"
                                    alt="The Groom"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Bride Info */}
                        <div className="text-center">
                            <h3 className="text-2xl font-medium text-rose-500 mb-3">{config.couple?.brideFullName}</h3>
                            <p className="text-gray-600">Putri {config.couple?.brideSibling} dari</p>
                            <p className="text-gray-700 font-medium">Bapak {config.couple?.brideFather} &</p>
                            <p className="text-gray-700 font-medium">Ibu {config.couple?.brideMother}</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Decorative Bottom Pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </section>
        </>
    )
}
