import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti';
import Marquee from "@/components/ui/marquee";
import {
  Calendar,
  Clock,
  ChevronDown,
  Star,
  User,
  MessageCircle,
  Send,
  Smile,
  CheckCircle,
  XCircle,
  HelpCircle,
  ArrowLeft,
  ArrowRight
} from 'lucide-react'
import { useState, useRef } from 'react';
import config from '@/config/config';

export default function Wishes() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [newWish, setNewWish] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attendance, setAttendance] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWish, setSelectedWish] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const marqueeRef = useRef(null);
  
  const options = [
    { value: 'attending', label: 'Yes, I will attend' },
    { value: 'not-attending', label: 'No, I cannot attend' },
    { value: 'maybe', label: 'Maybe, I will confirm later' }
  ];
  
  const [wishes, setWishes] = useState(config.wishes);
  
  const handleSubmitWish = async (e) => {
    e.preventDefault();
    if (!newWish.trim()) return;
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newWishObj = {
      id: wishes.length + 1,
      name: "Guest",
      message: newWish,
      attending: "attending",
      timestamp: new Date().toISOString()
    };
    
    setWishes(prev => [newWishObj, ...prev]);
    setNewWish('');
    setIsSubmitting(false);
    setShowConfetti(true);
    
    setTimeout(() => setShowConfetti(false), 3000);
  };
  
  const getAttendanceIcon = (status) => {
    switch (status) {
      case 'attending':
        return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'not-attending':
        return <XCircle className="w-4 h-4 text-rose-500" />;
      case 'maybe':
        return <HelpCircle className="w-4 h-4 text-amber-500" />;
      default:
        return null;
    }
  };
  
  const scroll = (direction) => {
    const container = marqueeRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <section id="wishes" className="min-h-screen relative overflow-hidden">
        {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
        
        <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 py-10 relative z-10">
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
              Send Your Love
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-serif text-gray-800"
            >
              Wedding Wishes
            </motion.h2>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-4 pt-4"
            >
              <div className="h-[1px] w-12 bg-rose-200" />
              <MessageCircle className="w-5 h-5 text-rose-400" />
              <div className="h-[1px] w-12 bg-rose-200" />
            </motion.div>
          </motion.div>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Scroll left"
              >
                <ArrowLeft className="w-5 h-5 text-rose-500" />
              </button>
              
              <div 
                ref={marqueeRef}
                className="overflow-x-auto"
              >  
                <div className="flex gap-4 p-2">
                  {wishes.map((wish, index) => (
                    <motion.div
                      key={wish.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative w-[280px] flex-shrink-0"
                      onClick={() => {
                        setSelectedWish(wish);
                        setModalOpen(true);
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />
                      
                      <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md cursor-pointer">
                        <div className="flex items-start space-x-3 mb-2">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                              {wish.name[0].toUpperCase()}
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-gray-800 text-sm truncate">
                                {wish.name}
                              </h4>
                              {getAttendanceIcon(wish.attending)}
                            </div>
                            
                            <div className="flex items-center space-x-1 text-gray-500 text-xs">
                              <Clock className="w-3 h-3" />
                              <time className="truncate">
                                {new Date(wish.timestamp).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </time>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-2">
                          {wish.message}
                        </p>
                        
                        {Date.now() - new Date(wish.timestamp).getTime() < 3600000 && (
                          <div className="absolute top-2 right-2">
                            <span className="px-2 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-medium">
                              New
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                aria-label="Scroll right"
              >
                <ArrowRight className="w-5 h-5 text-rose-500" />
              </button>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto mt-12"
            >
              <form onSubmit={handleSubmitWish} className="relative">
                <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
                  <div className='space-y-2'>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                        <User className="w-4 h-4" />
                        <span>Your Name</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your name..."
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-gray-700 placeholder-gray-400"
                        required
                      />
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2 relative"
                    >
                      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>Will you attend?</span>
                      </div>
                      
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                      >
                        <span className={attendance ? 'text-gray-700' : 'text-gray-400'}>
                          {attendance ?
                            options.find(opt => opt.value === attendance)?.label
                            : 'Select your response...'}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-rose-100 overflow-hidden"
                          >
                            {options.map((option) => (
                              <motion.button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setAttendance(option.value);
                                  setIsOpen(false);
                                }}
                                whileHover={{ backgroundColor: 'rgb(255, 241, 242)' }}
                                className={`w-full px-4 py-2.5 text-left transition-colors
                                  ${attendance === option.value
                                    ? 'bg-rose-50 text-rose-600'
                                    : 'text-gray-700 hover:bg-rose-50'
                                  }`}
                              >
                                {option.label}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm mb-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>Your Wish</span>
                      </div>
                      <textarea
                        value={newWish}
                        onChange={(e) => setNewWish(e.target.value)}
                        placeholder="Send your wishes to the happy couple..."
                        className="w-full h-32 p-4 rounded-xl bg-white/50 border border-rose-100 focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 resize-none transition-all duration-200"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Smile className="w-5 h-5" />
                      <span className="text-sm">Share your blessings</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-white font-medium transition-all duration-200
                        ${isSubmitting
                          ? 'bg-gray-300 cursor-not-allowed'
                          : 'bg-rose-500 hover:bg-rose-600'
                        }`}
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Wish'}</span>
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
        
        {/* Modal */}
        {modalOpen && selectedWish && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-gray-800">{selectedWish.name}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(selectedWish.timestamp).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                {getAttendanceIcon(selectedWish.attending)}
              </div>
              
              <p className="text-gray-600 whitespace-pre-wrap">{selectedWish.message}</p>
              
              <button
                onClick={() => setModalOpen(false)}
                className="mt-6 w-full py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </section>
    </>
  )
}