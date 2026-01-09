import { Calendar, TrendingUp, Users, Heart, BookOpen, Briefcase } from 'lucide-react';
const UpcomingCategory = () => {


    const categories = [
        {
            id:1,
            name:"Finance & Economy",
            icon:Briefcase,
            image:"https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
            bgGradient:"from-purple-400 to-purple-500",
        },
         {
      id: 2,
      name: "Entertainment",
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
      bgGradient: "from-purple-300 to-purple-500"
    },
    {
      id: 3,
      name: "Food & Dining",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",

      bgGradient: "from-purple-400 to-purple-500"
    },
    {
      id: 4,
      name: "Travel & Tourism",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",

      bgGradient: "from-purple-400 to-purple-500"
    },
    {
      id: 5,
      name: "Sports & Fitness",
      icon: Users,
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
     
      bgGradient: "from-purple-500 to-purple-600"
    },
    {
      id: 6,
      name: "Environment",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
 
      bgGradient: "from-purple-400 to-purple-600"
    },
    ]
    return (
        <div className='bg-gradient-to-br from-purple-50 to-white py-16 px-4 font-serif'>
            <div className=' max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-3xl lg:text-5xl font-bold text-purple-700 mb-4'>Upcoming Survey Categories</h2>
                    <p className='text-sm text-gray-500 max-w-2xl mx-auto'>Explore diverse survey topics and share your valuable opinions</p>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        categories.map((category)=> {
                            const Icon = category.icon;
                            return(
                            <div key={category.id} className='group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer'>
                            <div className='relative h-64 overflow-hidden'>
                                <img src={category.image} alt="image" className='w-full h-ful object-cover group-hover:scale-110 transition-transform duration-500 '/>

                                <div className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>

                            </div>

                            <div className='absolute inset-0 flex flex-col justify-end p-6'>
                                <div className='mb-4'>
                                    <div className='inline-flex items-center justify-center w-12 h-12 bg-white/20 '>
                                <Icon className='w-6 h-6 text-white'/>

                                    </div>

                                </div>

                                <h3 className='text-2xl font-bold text-white mb-2'>{category.name}</h3>

                            </div>
                            </div>
                        )})
                    }

                </div>

            </div>
        </div>
    );
};

export default UpcomingCategory;