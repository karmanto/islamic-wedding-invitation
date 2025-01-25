import config from '@/config/config'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function LoveStory() {
    return (
        <>
            {/* Event Section */}
            <section id="lovestory" className="min-h-screen relative overflow-hidden">
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
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-4 mb-16"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight"
                        >
                            Love Story
                        </motion.h2>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center justify-center gap-4 mt-6"
                        >
                            <div className="h-[1px] w-12 bg-rose-200" />
                            <div className="text-rose-400">
                                <Heart className="w-4 h-4" fill="currentColor" />
                            </div>
                            <div className="h-[1px] w-12 bg-rose-200" />
                        </motion.div>
                    </motion.div>

                    {config.loveStory?.length > 0 && config.loveStory.map((story, index) => (
                        <motion.div key={index}>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-rose-50/50 rounded-xl p-2 border border-2 border-rose-100 mb-4"
                            >
                                {story.date && 
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4 }}
                                        className="flex items-center justify-center"
                                    >
                                        <div className="text-blue-400 text-xs text-center whitespace-pre-line">
                                            {story.date}
                                        </div>
                                    </motion.div>
                                }
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex items-center justify-center"
                                >
                                    <div className="text-xl text-rose-500 text-center whitespace-pre-line">
                                        {story.title}
                                    </div>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex items-center justify-center"
                            >
                                <div className="text-grey-600 text-sm text-center whitespace-pre-line">
                                    {story.description}
                                </div>
                            </motion.div>
                            {
                                index + 1 < config.loveStory?.length && 
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="flex items-center justify-center mt-4 mb-4"
                                >
                                    <div className="h-[60px] w-[4px] bg-rose-200" />
                                </motion.div>
                            }
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative Bottom Pattern */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </section>
        </>
    )
}
