import { Shield, Zap, Users, Award, BarChart3, Clock } from 'lucide-react';

const WhyChooseUs = () => {

    const features = [
    {
      id: 1,
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and protected with industry-standard security measures. We never share your personal information.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 2,
      icon: Zap,
      title: "Lightning Fast",
      description: "Create and launch surveys in minutes. Our intuitive platform makes survey creation quick and effortless.",
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 3,
      icon: Users,
      title: "Large Community",
      description: "Join thousands of active users sharing opinions. Get diverse perspectives and valuable insights instantly.",
      color: "from-purple-700 to-purple-800"
    },
    {
      id: 4,
      icon: Award,
      title: "Earn Rewards",
      description: "Participate in surveys and earn points. Redeem rewards and make your voice heard while benefiting.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 5,
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "View results instantly with powerful analytics tools. Make data-driven decisions with comprehensive reports.",
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 6,
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to help. Get assistance whenever you need it, day or night.",
      color: "from-purple-700 to-purple-800"
    }
  ];
    return (
        <div className='bg-white dark:bg-zinc-700 py-29 px-4 '>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='inline-block mb-4'>
                         <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold font-serif">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-purple-700 dark:text-purple-400  font-serif mb-6">
            Why Our <span className='text-blue-600 dark:text-blue-500 '>Platform Stands Out</span>
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-serif">
            We provide the most reliable and user-friendly survey platform with cutting-edge features designed to deliver exceptional results
          </p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
                    {features.map((item,index) => {
                        const Icon = item.icon;
                        return(
                            <div key={item.id} className='group relative bg-white dark:bg-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2' style={{animationDelay:`${index * 100}ms`}}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 `}></div>

                            <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                <Icon className='w-8 h-8 text-white'/>
                                </div>  
                             <h3 className='text-2xl font-bold text-purple-800 mb-4 group-hover:text-purple-700 transition-colors duration-300'>{item.title}</h3>  
                              <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

           
                {/* <div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </div>
                        );
                    })}

                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-purple-200 font-medium">Active Users</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2">100K+</div>
              <div className="text-purple-200 font-medium">Surveys Created</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2">1M+</div>
              <div className="text-purple-200 font-medium">Responses Collected</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-purple-200 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>

          {/* <div className="text-center mt-12">
          <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-800 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div> */}

            </div>
            
        </div>
    );
};

export default WhyChooseUs;