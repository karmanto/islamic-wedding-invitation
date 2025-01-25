import config from '@/config/config';
import { motion } from 'framer-motion';
import { LucideImages as Image } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import Marquee from "@/components/ui/marquee";

export default function Galery() {
    return (
        <>
            {/* Event Section */}
            <section id="galery" className="min-h-screen relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
                <div className="absolute top-0 left-0 w-64 h-64 bg-rose-100/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

                <div className="min-h-screen flex flex-col">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 container mx-auto px-4 pt-10 pb-4"
                    >
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center space-y-4"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
                            >
                                Galery
                            </motion.h2>

                            {/* Decorative Divider */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center justify-center gap-4 pt-4"
                            >
                                <div className="h-[1px] w-12 bg-rose-200" />
                                <Image className="w-5 h-5 text-rose-400" />
                                <div className="h-[1px] w-12 bg-rose-200" />
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <div className='flex my-auto'>
                        <AnimatePresence>
                            <Marquee speed={20}
                                gradient="false"
                                pauseOnHover={true}
                                className="[--duration:60s]">
                                {config.galleries && config.galleries.map((image, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="backdrop-blur-sm bg-white/80 p-2 rounded-xl border border-rose-100/50 shadow-md">
                                            <div className="flex items-center justify-center h-[400px] w-[300px] overflow-hidden">
                                                <img
                                                    src={image}
                                                    alt={`image ${index}`}
                                                    className="object-contain w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </Marquee>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Decorative Bottom Pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </section>
        </>
    )
}
