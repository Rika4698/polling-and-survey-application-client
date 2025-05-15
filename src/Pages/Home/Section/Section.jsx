/* eslint-disable react/no-unescaped-entities */
// import { Disclosure } from '@headlessui/react'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Section = () => {
    return (
      <div>
       

   
   
   
   
   
      <div className="relative isolate overflow-hidden bg-custom bg-white dark:bg-zinc-700 ">
                <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                    <div className="flex flex-col text-center md:text-left basis-1/2">
                        <p className="inline-block font-semibold text-primary mb-4 dark:text-blue-300 font-serif">F.A.Q</p>
                        <p className="sm:text-4xl text-3xl font-extrabold  font-serif text-purple-700 dark:text-purple-400">Frequently Asked Questions</p>
                    </div>
                    <ul className="basis-1/2">
                        <li className='group'>
                            <button className="relative  flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 dark:border-slate-400" aria-expanded="false">
                                <span className="flex-1  text-purple-700 text-xl dark:text-purple-300">How do I create a new survey?</span>
                                <svg className="flex-shrink-0 w-4 h-4  ml-auto fill-current dark:text-slate-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="block group-hover:opacity-0 origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <div className="space-y-2 leading-relaxed font-medium dark:text-gray-200"> User can not create survey. As I say before, we have dedicated surveyor. Their work is to create survey.</div>
                                </div>
                            </div>
                        </li>
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 dark:border-slate-400" aria-expanded="false">
                                <span className="flex-1 text-blue-700 text-xl dark:text-blue-300">Can I update my survey questions after publishing?</span>
                                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current dark:text-slate-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="group-hover:opacity-0 transform origin-center rotate-90 transition-all duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <div className="space-y-2 leading-relaxed font-medium dark:text-gray-200">No, once you are a surveyor, you can update the questions to maintain data integrity.</div>
                                </div>
                            </div>
                        </li>
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 dark:border-slate-400" aria-expanded="false">
                                <span className="flex-1 text-purple-700 text-xl dark:text-purple-300">How do I comment on a survey?</span>
                                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current dark:text-slate-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <div className="space-y-2 leading-relaxed font-medium dark:text-gray-200">Only pro users can comment in a survey. You must be a Pro User member.</div>
                                </div>
                            </div>
                        </li>
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 dark:border-slate-400" aria-expanded="false">
                                <span className="flex-1 text-blue-700 text-xl dark:text-blue-300">How to become a pro user?</span>
                                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current dark:text-slate-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <div className="space-y-2 leading-relaxed font-medium dark:text-gray-200">You have to pay for membership on the pro user page.</div>
                                </div>
                            </div>
                        </li>
                        <li className='group'>
                            <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10 dark:border-slate-400" aria-expanded="false">
                                <span className="flex-1 text-purple-700 text-xl dark:text-purple-300">Can I report a survey?</span>
                                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current dark:text-slate-50" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                                    <rect y="7" width="16" height="2" rx="1" className="group-hover:opacity-0 transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                                </svg>
                            </button>
                            <div className="transition-all duration-300 ease-in-out group-hover:max-h-60 max-h-0 overflow-hidden" style={{ transition: "max-height 0.3s ease-in-out 0s" }}>
                                <div className="pb-5 leading-relaxed">
                                    <div className="space-y-2 leading-relaxed font-medium dark:text-gray-200">Only logged-in users can report in surveys.</div>
                                </div>
                            </div>
                        </li>
                       
                    </ul>
                </div>
            </div>

      </div>
    );
};

export default Section;