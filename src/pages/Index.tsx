
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
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
        {/* Hero Section */}
        <div className="glass-card rounded-3xl p-12 md:p-16">
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
              <a 
                href="https://forms.gle/4KQS4NBTLwQdR9km7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#0EA5E9] rounded-full font-medium text-white 
                          transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                          hover:shadow-[#0EA5E9]/20 active:scale-95"
              >
                Request Access
              </a>
            </motion.div>
          </div>
        </div>

        {/* Key Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-24 glass-card rounded-3xl p-12 md:p-16"
        >
          <div className="space-y-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Key Features
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                <h3 className="text-xl font-semibold text-highlight">Serverless Inference</h3>
                <p className="text-neutral-200 leading-relaxed">
                  High-performance inference endpoints that automatically scale with your traffic. Deploy faster and cheaper with the latest model optimization techniques.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <h3 className="text-xl font-semibold text-highlight">Ready-made Multimodal AI Apps</h3>
                <p className="text-neutral-200 leading-relaxed">
                  Launch compound AI applications for common use cases like document search and video content summarization out of the box. Customize with your data for turnkey enterprise AI apps hosted on your own infra.
                </p>
              </motion.div>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <h3 className="text-xl font-semibold text-highlight">Control Plane for Hybrid Cloud</h3>
                <p className="text-neutral-200 leading-relaxed">
                  Unify your AI compute across public clouds and on-prem resources. Single interface, complete visibility over system health and performance, and granular control over resource allocation.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* About Us Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-24 glass-card rounded-3xl p-12 md:p-16"
        >
          <div className="space-y-8">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              About Us
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-lg text-neutral-200 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <p>
                We're engineers who love solving hard problems in GPU orchestration. Our backgrounds span hybrid cloud architecture, GPU hardware, systems programming, and robotics - but we're always learning from each other and the wider open source community.
              </p>
              
              <p>
                Working across Singapore and India, our team brings together folks who've previously built large scale systems at companies like Meta, Nutanix, ByteDance, and Gojek. Many of us have spent substantial time in US and European tech ecosystems, and are now united back in Asia to build global tech from home.
              </p>
              
              <p>
                We keep things simple: write good code, build reliable systems, and have fun doing it. If you're passionate about GPU infrastructure and enjoy diving deep into technical challenges, we'd love to chat.
              </p>

              <div className="flex justify-center mt-8">
                <a 
                  href="mailto:info@soracloud.ai"
                  className="px-8 py-4 bg-[#0EA5E9] rounded-full font-medium text-white 
                          transform transition-all duration-300 hover:scale-105 hover:shadow-lg 
                          hover:shadow-[#0EA5E9]/20 active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
