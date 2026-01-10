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
        <div className='bg-gradient-to-b from-white via-purple-50 to-white py-29 px-4 font-serif'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <div className='inline-block mb-4'>
                        <span className='bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold'>Why Choose Us</span>

                    </div>
                    <h2 className='font-bold'></h2>

                </div>

            </div>
            
        </div>
    );
};

export default WhyChooseUs;