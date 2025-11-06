import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import HeroBg from '@/../public/images/backgrounds/HeroBg.svg';
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";
import DemoImg from '@/../public/images/Blog-page/demo.webp';

const KnowledgeHub = () => {

  return (
    <div>
        <div className='relative w-full h-screen overflow-visible'>
            <Image
                src={HeroBg}
                alt="Hero Background"
                fill
                loading="lazy"
                className='absolute inset-0 object-cover h-full w-full'
            />
            <div className='absolute inset-0 z-10'>
                <Navbar />
                    <div className="my-10 sm:my-12 lg:my-20 2xl:my-24 container mx-auto justify-center place-items-center text-center ">
                        <h1 className="heading-font text-3xl lg:text-5xl">The Future of Search Is Here</h1>
                        <p className="content-font text-base mt-2 lg:mt-3 sm:w-8/12 lg:w-7/12 xl:w-5/12 2xl:w-4/12 px-3 mx-auto text-center">Learn how to optimize for AI-powered discovery and become the answer AI recommends when customers search for businesses like yours.</p>
                    </div>

                    {/* blog content */}
                    <div className='container mx-auto mb-10 lg:mb-20 2xl:mb-24 justify-center place-items-center'>
                        <div className='grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 xl:gap-7 mx-4 sm:mx-0 lg:mx-5'>
                            {/* blog-1 */}
                            <div className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                                    <Link href="blog/how-to-rank-your-website-or-brand-in-chatgpt-latest-strategy-guide" target="_blank" rel="noopener noreferrer" 
                                            className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                        <Image
                                            src={DemoImg}
                                            alt="Blog1 Image"
                                            className="object-cover h-full"
                                        />
                                    </Link>
                                    <Link href="blog/how-to-rank-your-website-or-brand-in-chatgpt-latest-strategy-guide" target="_blank" rel="noopener noreferrer" className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                        <span className="text-sm text-left text-[var(--cta)] text-l content-font">#trending</span>
                                        <h2 className="heading-font font-medium text-sm lg:text-base tracking-[-0.06rem] mb-2">How to Rank Your Website or Brand in ChatGPT : Latest Strategy Guide</h2>
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
                            
                            {/* blog-2 */}
                            <div className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                                    <Link href="blog/complete-guide-to-chatgpt-rank-tracking-tools-in-2025" target="_blank" rel="noopener noreferrer" 
                                            className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                        <Image
                                            src={DemoImg}
                                            alt="Blog2 Image"
                                            className="object-cover h-full"
                                        />
                                    </Link>
                                    <Link href="blog/complete-guide-to-chatgpt-rank-tracking-tools-in-2025" target="_blank" rel="noopener noreferrer" className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                        <span className="text-sm text-left text-[var(--cta)] text-l content-font">#trending</span>
                                        <h2 className="heading-font font-medium text-sm lg:text-base tracking-[-0.06rem] mb-2">Complete Guide to ChatGPT Rank Tracking Tools in 2025!</h2>
                                        <p className="text-sm text-[#0f0a08c1] content-font mb-2 lg:mb-4">This post explains the fundamental shift happening in search behavior and why businesses need to adapt.</p>
                                        <div className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between mt-auto'>
                                            <p className='text-[#878483] content-font text-xs'>Oct 25, 2025 &nbsp; | &nbsp; 3 mins read</p>
                                            <p
                                                className='cursor-pointer group text-[var(--cta)] content-font text-xs flex items-center font-bold hover:text-[var(--cta)] transition duration-300'>
                                                Read More <span className='text-[var(--cta)] ps-1 text-sm transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* blog-3 */}
                            <div className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                                    <Link href="blog/best-chatgpt-seo-agency-&-services-for-ai-search-ranking" target="_blank" rel="noopener noreferrer" 
                                            className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                        <Image
                                            src={DemoImg}
                                            alt="Blog Image 3"
                                            className="object-cover h-full"
                                        />
                                    </Link>
                                    <Link href="blog/best-chatgpt-seo-agency-&-services-for-ai-search-ranking" target="_blank" rel="noopener noreferrer" className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                        <span className="text-sm text-left text-[var(--cta)] text-l content-font">#trending</span>
                                        <h2 className="heading-font font-medium text-sm lg:text-base tracking-[-0.06rem] mb-2">Best ChatGPT SEO Agency & Services for AI Search Ranking</h2>
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

                            {/* blog-4 */}
                            <div className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                                    <Link href="blog/how-to-rank-in-ai-overview-understand-the-seo-vs-geo-vs-aeo" target="_blank" rel="noopener noreferrer" 
                                            className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                        <Image
                                            src={DemoImg}
                                            alt="Blog Image 3"
                                            className="object-cover h-full"
                                        />
                                    </Link>
                                    <Link href="blog/how-to-rank-in-ai-overview-understand-the-seo-vs-geo-vs-aeo" target="_blank" rel="noopener noreferrer" className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                        <span className="text-sm text-left text-[var(--cta)] text-l content-font">#trending</span>
                                        <h2 className="heading-font font-medium text-sm lg:text-base tracking-[-0.06rem] mb-2">How to Rank in AI Overview : Understand the SEO vs GEO vs AEO</h2>
                                        <p className="text-sm text-[#0f0a08c1] content-font mb-2 lg:mb-4">This post explains the fundamental shift happening in search behavior and why businesses need to adapt.                            </p>
                                        <div className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between mt-auto'>
                                            <p className='text-[#878483] content-font text-xs'>Oct 25, 2025 &nbsp; | &nbsp; 4 mins read</p>
                                            <p
                                                className='cursor-pointer group text-[var(--cta)] content-font text-xs flex items-center font-bold hover:text-[var(--cta)] transition duration-300'>
                                                Read More <span className='text-[var(--cta)] ps-1 text-sm transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            {/* blog-5 */}
                            <div className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>
                                    <Link href="blog/how-ai-overviews-are-stealing-your-traffic-recovery-&-ranking-strategies-for-2025" target="_blank" rel="noopener noreferrer" 
                                            className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                        <Image
                                            src={DemoImg}
                                            alt="Blog Image 3"
                                            className="object-cover h-full"
                                        />
                                    </Link>
                                    <Link href="blog/how-ai-overviews-are-stealing-your-traffic-recovery-&-ranking-strategies-for-2025" target="_blank" rel="noopener noreferrer" className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                        <span className="text-sm text-left text-[var(--cta)] text-l content-font">#trending</span>
                                        <h2 className="heading-font font-medium text-sm lg:text-base tracking-[-0.06rem] mb-2">How AI Overviews Are Stealing Your Traffic Recovery & Ranking Strategies for 2025.</h2>
                                        <p className="text-sm text-[#0f0a08c1] content-font mb-2 lg:mb-4">This post explains the fundamental shift happening in search behavior and why businesses need to adapt.</p>
                                        <div className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between mt-auto'>
                                            <p className='text-[#878483] content-font text-xs'>Oct 25, 2025 &nbsp; | &nbsp; 3 mins read</p>
                                            <p
                                                className='cursor-pointer group text-[var(--cta)] content-font text-xs flex items-center font-bold hover:text-[var(--cta)] transition duration-300'>
                                                Read More <span className='text-[var(--cta)] ps-1 text-sm transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span></p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                            
                        {/* row-2 blog cards */}
                       
                    </div>
                    
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default KnowledgeHub
