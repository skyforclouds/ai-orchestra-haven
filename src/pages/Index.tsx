
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-20 w-64 h-64 bg-highlight/5 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-highlight/10 rounded-full filter blur-3xl"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="container max-w-4xl relative z-10"
      >
        <div className="glass-card rounded-3xl p-12 md:p-16">
          {/* Hero Content */}
          <div className="text-center space-y-8">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              The <span className="text-highlight">Operating System</span> for Your AI Infrastructure
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Single control plane for your AI compute whether public cloud or on-prem. Serverless inference and multimodal AI applications out of the box, optimized for performance and cost.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <button 
                className="px-8 py-4 bg-[#0EA5E9] rounded-full font-medium text-white 
                          transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                          hover:shadow-[#0EA5E9]/20 active:scale-95"
              >
                Request Access
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
