import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { HiMiniShare, HiMiniArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import Image from 'next/image';
import DemoImg from '@/../public/images/Blog-page/demo.webp';

const KnowledgeHub = () => {

  return (
    <div>
        <div className='h-screen bg-[radial-gradient(circle_at_top,rgba(246,238,234)_0%,rgba(246,239,235)_60%,white_70%)]'>
            
            <div className=''>
                <Navbar />
                    <div className="my-10 sm:my-12 lg:my-20 2xl:my-24 container mx-auto justify-center place-items-center text-center ">
                        <h1 className="heading-font text-3xl lg:text-4xl xl:text-5xl sm:w-10/12 lg:w-10/12 2xl:w-8/12">How to Rank Your Website or Brand in ChatGPT: Latest Strategy Guide</h1>
                        <div className='flex flex-row justify-between items-center mt-4 sm:mt-8'>
                            <p className='text-[#878483] content-font text-xs me-8 sm:me-12'>Oct 25, 2025 &nbsp; | &nbsp; 2 mins read</p>
                            <Link href="https://geo.notionx.ai/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='cursor-pointer group text-[var(--cta)] content-font text-base flex items-center font-bold hover:underline'>
                                Share <span className='text-[var(--cta)] ps-1 text-sm'><HiMiniShare /></span></Link>
                        </div>

                        <div className='mx-auto container overflow-hidden rounded-lg lg:rounded-xl h-60 sm:h-80 sm:w-[56.25rem] px-4 lg:px-0 my-7 sm:my-10'>
                            <Image 
                                src={DemoImg}
                                alt="Hero Background"
                                // fill
                                loading="lazy"
                                className='object-center object-cover h-full w-full rounded-lg lg:rounded-xl'
                            />
                        </div>
                    </div>

                    <div className='mx-auto container overflow-hidden px-4 lg:px-0 my-7 sm:my-10'>
                        <div className='flex flex-col lg:max-w-5xl sm:w-[56.25rem] mx-auto container'>
                            <div className="p-[1px] rounded-t-xl sm:rounded-t-[20px] bg-[radial-gradient(circle_at_center,#FF4E18_40%,#FEE7DF)]">
                                <div className="py-3 sm:py-5 rounded-t-xl sm:rounded-t-[20px] bg-white">
                                    <p className="heading-font font-semibold text-xl sm:text-2xl text-center tracking-[-0.05rem]">
                                    Key Takeaway
                                    </p>
                                </div>
                            </div>
                            <div className="px-[1px] pt-0 pb-[1px] rounded-b-xl sm:rounded-b-[20px] bg-[radial-gradient(circle_at_center,#FF4E18_40%,#FEE7DF)]">
                                <div className="py-3 sm:py-5 sm:px-16 rounded-b-xl sm:rounded-b-[20px] bg-white">
                                    <p className="content-font text-xl sm:text-2xl text-center">
                                        Showing up in its responses can even greatly increase your visibility and trust. This shift calls for a new kind of SEO that goes beyond - keywords and backlinks. You need to combine traditional techniques with new strategies tailored for AI-driven search. This guide explores how to rank in ChatGPT search using the latest strategies in - SEO, GEO targeting, and AI optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto container flex flex-col lg:max-w-5xl sm:w-[56.25rem]'>
                            <div className='my-10 sm:my-16'>
                                <p className="content-font text-xl lg:text-2xl tracking-[-0.05rem]">
                                    In the age of AI-powered search, visibility in Chat GPT is becoming - as crucial as ranking on Google. With 700 million weekly users interacting with Chat GPT - brands and websites must adapt to this new paradigm. 
                                    So, more people now use conversational AI like Chat GPT to find - products, services, and answers. Showing up in its responses can even greatly increase your visibility and trust. 
                                    This shift calls for a new kind of SEO that goes beyond - keywords and backlinks. You need to combine traditional techniques with new strategies tailored for AI-driven search.
                                    This guide explores how to rank in Chat GPT search using the latest strategies in - SEO, GEO targeting, and AI optimization.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* read more blogs */}
                    <div className='bg-[#FAF7F5]'>
                        <div className='container mx-auto py-16 sm:py-20 lg:py-28 justify-center place-items-center'>
                            <div className='mb-10 sm:mb-16'>
                                <p className="heading-font font-semibold text-xl sm:text-2xl lg:text-3xl text-center tracking-[-0.05rem]">Relevant Knowledge Base</p>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-3 lg:gap-5 xl:gap-7 mx-4 sm:mx-0 lg:mx-5'>
                            
                                <div className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                    <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                                        <Link href="/blogpage" target="_blank" rel="noopener noreferrer" 
                                                className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                            <Image
                                                src={DemoImg}
                                                alt="Blog Image 1"
                                                className="object-cover h-full"
                                            />
                                        </Link>
                                        <Link href="/blogpage" target="_blank" rel="noopener noreferrer" className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                            <span className="text-sm text-left text-[var(--cta)] text-l content-font">#trending</span>
                                            <h2 className="heading-font font-medium text-sm lg:text-base tracking-[-0.06rem] mb-2">Why Traditional SEO Is No Longer Enough: The Rise of AI-Powered Search</h2>
                                            <p className="text-sm text-[#0f0a08c1] content-font mb-2 lg:mb-4">This post explains the fundamental shift happening in search behavior and why businesses need to adapt.                            </p>
                                            <div className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between mt-auto'>
                                                <p className='text-[#878483] content-font text-xs'>Oct 25, 2025 &nbsp; | &nbsp; 2 mins read</p>
                                                <p
                                                    className='cursor-pointer group text-[var(--cta)] content-font text-xs flex items-center font-bold hover:text-[var(--cta)] transition duration-300'>
                                                    Read More <span className='text-[var(--cta)] ps-1 text-sm transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span></p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                
                                <div className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                    <div href="/blogpage" target="_blank" rel="noopener noreferrer" className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                                        <Link href="/blogpage" target="_blank" rel="noopener noreferrer" 
                                                className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                            <Image
                                                src={DemoImg}
                                                alt="Blog Image 2"
                                                className="object-cover h-full"
                                            />
                                        </Link>
                                        <Link href="/blogpage" target="_blank" rel="noopener noreferrer" className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                            <span className="text-sm text-left text-[var(--cta)] text-l content-font">#trending</span>
                                            <h2 className="heading-font font-medium text-sm lg:text-base tracking-[-0.06rem] mb-2">How to Rank Your Website or Brand in ChatGPT: Latest Strategy Guide</h2>
                                            <p className="text-sm text-[#0f0a08c1] content-font mb-2 lg:mb-4">In the age of AI-powered search, visibility in ChatGPT is becoming - as crucial as ranking on Google. Rank Your Website or Brand in ChatGPT.</p>
                                            <div className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between mt-auto'>
                                                <p className='text-[#878483] content-font text-xs'>Oct 25, 2025 &nbsp; | &nbsp; 2 mins read</p>
                                                <p
                                                    className='cursor-pointer group text-[var(--cta)] content-font text-xs flex items-center font-bold hover:text-[var(--cta)] transition duration-300'>
                                                    Read More <span className='text-[var(--cta)] ps-1 text-sm transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span></p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                                <div className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                    <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                                        <Link href="/blogpage" target="_blank" rel="noopener noreferrer" 
                                                className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                            <Image
                                                src={DemoImg}
                                                alt="Blog Image 3"
                                                className="object-cover h-full"
                                            />
                                        </Link>
                                        <Link href="/blogpage" target="_blank" rel="noopener noreferrer" className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                            <span className="text-sm text-left text-[var(--cta)] text-l content-font">#trending</span>
                                            <h2 className="heading-font font-medium text-sm lg:text-base tracking-[-0.06rem] mb-2">Why Traditional SEO Is No Longer Enough: The Rise of AI-Powered Search</h2>
                                            <p className="text-sm text-[#0f0a08c1] content-font mb-2 lg:mb-4">This post explains the fundamental shift happening in search behavior and why businesses need to adapt.                            </p>
                                            <div className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between mt-auto'>
                                                <p className='text-[#878483] content-font text-xs'>Oct 25, 2025 &nbsp; | &nbsp; 2 mins read</p>
                                                <p
                                                    className='cursor-pointer group text-[var(--cta)] content-font text-xs flex items-center font-bold hover:text-[var(--cta)] transition duration-300'>
                                                    Read More <span className='text-[var(--cta)] ps-1 text-sm transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span></p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default KnowledgeHub
