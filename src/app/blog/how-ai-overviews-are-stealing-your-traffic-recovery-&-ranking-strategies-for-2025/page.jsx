import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { HiMiniShare, HiMiniArrowSmallRight } from "react-icons/hi2";
import BlackArrow from '@/../public/images/Blog-page/Black-Arrow.svg';
import Link from "next/link";
import Image from 'next/image';
import DemoImg from '@/../public/images/Blog-page/demo.webp';
import Grammarly from '@/../public/images/Blog-page/Blog4-grammarly.png';
import HumanWritten from '@/../public/images/Blog-page/Blog4-HumanWritten.png';
import AuthorImage from '@/../public/images/Blog-page/AuthorImage.jpg';

export const metadata = {
  title: "How AI Overviews Are Stealing Your Traffic: Recovery & Ranking Strategies for 2025! | NotionX",
 // keywords: ["How to Rank in AI Overview", "What is GEO", "What is AI SEO", "SEO vs GEO", "GEO vs SEO", "What is GEO vs SEO", "SEO vs GEO vs AEO", "GEO vs. SEO", "SEO vs AEO vs GEO", "AEO vs SEO vs GEO", "GEO vs SEO vs AEO", "SEO vs. GEO"],
//   description: "How to Rank Your Website or Brand in Chat GPT: Latest Strategy Guide.",
};

const blogPosts = [
  
  {
    id: 1,
    href: "blog/how-to-rank-your-website-or-brand-in-chatgpt-latest-strategy-guide",
    image: DemoImg,
    tag: "#trending",
    title: "How to Rank Your Website or Brand in ChatGPT : Latest Strategy Guide",
    desc: "This post explains the fundamental shift happening in search behavior and why businesses need to adapt.",
    date: "Oct 25, 2025",
    readTime: "2 mins read",
  },
  {
    id: 2,
    href: "blog/best-chatgpt-seo-agency-&-services-for-ai-search-ranking",
    image: DemoImg,
    tag: "#trending",
    title: "Best ChatGPT SEO Agency & Services for AI Search Ranking",
    desc: "This post explains the fundamental shift happening in search behavior and why businesses need to adapt.",
    date: "Oct 25, 2025",
    readTime: "2 mins read",
  },
  {
    id: 3,
    href: "blog/complete-guide-to-chatgpt-rank-tracking-tools-in-2025",
    image: DemoImg,
    tag: "#trending",
    title: "Complete Guide to ChatGPT Rank Tracking Tools in 2025!",
    desc: "This post explains the fundamental shift happening in search behavior and why businesses need to adapt.",
    date: "Oct 25, 2025",
    readTime: "3 mins read",
  },
];

const Blog5 = () => {

  return (
    <div>
        <div className='h-screen bg-[radial-gradient(circle_at_top,rgba(246,238,234)_0%,rgba(246,239,235)_60%,white_70%)]'>
            
            <div className=''>
                <Navbar />
                    <div className="my-10 sm:my-12 lg:my-20 2xl:my-24 container mx-auto justify-center place-items-center text-center ">
                        <h1 className="heading-font text-3xl lg:text-4xl xl:text-5xl sm:w-10/12 lg:w-10/12 2xl:w-8/12">How AI Overviews Are Stealing Your Traffic: Recovery & Ranking Strategies for 2025!</h1>
                        <div className='flex flex-row justify-between items-center mt-4 sm:mt-8'>
                            <p className='text-[#878483] content-font text-xs'>Author Name</p>
                            <p className='text-[#878483] mx-4 text-2xl sm:text-3xl'> · </p>
                            <p className='text-[#878483] content-font text-xs'>Oct 25, 2025 &nbsp; | &nbsp; 2 mins read</p>
                            <p className='text-[#878483] mx-4 text-2xl sm:text-3xl'> · </p>
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
                                        Key Takeaway</p>
                                </div>
                            </div>
                            <div className="px-[1px] pt-0 pb-[1px] rounded-b-xl sm:rounded-b-[20px] bg-[radial-gradient(circle_at_center,#FF4E18_40%,#FEE7DF)]">
                                <div className="py-3 sm:py-5 px-4 sm:px-16 rounded-b-xl sm:rounded-b-[20px] bg-[#FAF7F5]">
                                    <p className="content-font text-lg sm:text-xl text-center">
                                        Showing up in its responses can even greatly increase your visibility and trust. This shift calls for a new kind of SEO that goes beyond - keywords and backlinks. You need to combine traditional techniques with new strategies tailored for AI-driven search. This guide explores how to rank in ChatGPT search using the latest strategies in - SEO, GEO targeting, and AI optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto container flex flex-col lg:max-w-5xl sm:w-[56.25rem]'>
                            <div className='my-10 sm:my-16'>
                                <p className="heading-font font-semibold text-xl sm:text-2xl tracking-[-0.05rem]">
                                    In This Article:</p>
                                <ul className="ms-6 mt-2.5 sm:mt-6 space-y-2 content-font text-[var(--cta)] list-disc list-outside text-lg lg:text-xl tracking-[-0.05rem]">
                                    <li className='hover:underline'><a href="#ai-overview-crisis">The AI Overview Crisis: How Much Digital Traffic Are You Losing?</a></li>
                                    <li className='hover:underline'><a href="#why-are-ai-overviews-dominating">Why Are AI Overviews Dominating Search Results?</a></li>
                                    <li className='hover:underline'><a href="#moving-forward">Moving Forward: Your Competitive Advantage in the AI-First Search Era!</a></li>
                                </ul>
                            </div>

                            {/* How AI Overview */}
                            <div className='mb-10 sm:mb-16'>
                                <h2 className="heading-font font-semibold text-2xl sm:text-3xl tracking-[-0.05rem]">How AI Overviews Are Stealing Your Traffic: Recovery & Ranking Strategies for 2025!</h2>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">
                                    The digital marketing landscape is experiencing its biggest transformation. A new era of search results has been introduced in the three decades since the commencement of Google. This complete scenario has made it challenging to capture online traffic in 2025.
                                </p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">With the upsurge of ChatGPT and Perplexity AI, users are progressively seeking - direct and conversational answers instead. So, all types of businesses are observing unparalleled dips in their organic traffic.</p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Latest research has shown that AI Overviews can lead to a 15% to 64% decline in online traffic across the industry. This change is causing digital marketers to reassess their entire strategy concerning digital visibility.</p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">We will explore how AI Overviews are stealing your online traffic and how you can recover or drive ranking strategies for 2025.</p>
                            </div>

                            {/* The AI Overview Crisis */}
                            <div id='ai-overview-crisis' className='mb-10 sm:mb-16'>
                                <h2 className="heading-font font-semibold text-2xl sm:text-3xl tracking-[-0.05rem]">The AI Overview Crisis: How Much Digital Traffic Are You Losing?</h2>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">
                                    Google's AI Overviews, introduced in May 2024, provide answers directly in search outcomes utilizing Gen AI. While fitting for users, this feature sidesteps conventional blue links, eliminating the requirement to click through to company websites.
                                </p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">If you ask Google a question, the foremost entry will be a Google AI Overview, which is a curated, concise reply with footnotes. For most online viewers of the reply, the concise details are all they require, so they do not click or explore any other link from the search.</p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Online publishers are losing up to 89 percent of their organic traffic due to Google's AI Overviews. There is a major impact on the click-through rates and content visibility. Learning platform Chegg informed a 49 percent reduction in its non-subscriber traffic in 2024-25.</p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Additionally, Google's AI Overviews have pushed top-ranked links far down the page. They can be displaced by up to 1,500 pixels. That is two full scrolls on desktop and three on mobile. Hence, high-ranking pages now get - fewer clicks.</p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Around 57 percent of Google searches in 2024 ended without a - click to another website. This was up from 50 percent in 2020. Queries comprising - quick facts, weather, or math have a {">"} 80 percent probability of - being zero-click (Source: SEMrush).</p>
                                
                            </div>

                            {/* Why Are AI Overviews Dominating Search Results? */}
                            <div id='why-are-ai-overviews-dominating' className='mb-10 sm:mb-16 scroll-mt-10 sm:scroll-mt-16'>
                                <h2 className="heading-font font-semibold text-2xl sm:text-3xl tracking-[-0.05rem]">Why Are AI Overviews Dominating Search Results?</h2>
                                <p className="mt-2 sm:mt-4 content-font text-lg lg:text-xl tracking-[-0.05rem]">AI Overviews dominate search results as Google now favors fast and authoritative summaries. They often appear above traditional website links.</p>
                                <p className="mt-2 sm:mt-4 content-font text-lg lg:text-xl tracking-[-0.05rem]">AI Overviews reduce user effort by answering queries instantly. Citation visibility is lower - with fewer users clicking through. SEO strategies must adapt to this shift in user behavior.</p>
                                
                                <div className='my-8'>
                                    <h2 className="flex flex-row items-center heading-font text-[#222222] font-medium text-xl sm:text-2xl tracking-[-0.05rem]"><Image src={BlackArrow} alt="Black Arrow icon" className='me-2'/>Google Prioritizes AI-Generated Answers.</h2>
                                    <p className="ms-5 mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Ranking signals now reflect semantic relevance compared to keyword density. AI Overviews use large language models to - synthesize answers from multiple sources. They prioritize contextual accuracy and user intent.</p>
                                    <p className="ms-5 mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">AI Overviews are now triggered by high-volume informational queries. Common triggers include searches like “how to,” “best way,” and “what is.”</p>
                                    <p className="ms-5 mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Broad or ambiguous questions also activate AI summaries. These overviews appear above regular search results. Even top-ranked pages get pushed down the page. This reduces click-through rates and organic traffic.</p>
                                </div>
                                <div className='my-8'>
                                    <h2 className="flex flex-row items-center heading-font text-[#222222] font-medium text-xl sm:text-2xl tracking-[-0.05rem]"><Image src={BlackArrow} alt="Black Arrow icon" className='me-2'/>Citation Mechanisms in AI Overviews.</h2>
                                    <p className="ms-5 mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">AI Overviews cite sources inline or in expandable panels. These citations are less visible than traditional blue links.</p>
                                    <p className="ms-5 mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Google chooses sources using trust signals like authority and structured data. Keyword matching alone does not guarantee citation. Most users skip citations unless they want deeper context.</p>
                                </div>
                                <div className='my-8'>
                                    <h2 className="flex flex-row items-center heading-font text-[#222222] font-medium text-xl sm:text-2xl tracking-[-0.05rem]"><Image src={BlackArrow} alt="Black Arrow icon" className='me-2'/>User Behavior Shifts.</h2>
                                    <p className="ms-5 mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Users now scroll and click less during searches. They rely on AI summaries for instant answers. A recent study showed that most of them used only AI-generated content.</p>
                                    <p className="ms-5 mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Many skipped traditional searches entirely. Trust in AI Overviews is growing rapidly. Younger users prefer speed and ease over source checking.</p>
                                </div>
                            </div>

                            <div className='mx-auto container overflow-hidden flex flex-col lg:flex-row space-y-6 lg:space-y-0 space-x-0 lg:space-x-6 mb-10 sm:mb-16'>
                                {/* image 1 */}
                                <div className='rounded-lg lg:rounded-xl px-4 border border-[var(--stroke)]'>
                                    <Image 
                                        src={Grammarly}
                                        alt="Grammarly"
                                        loading="lazy"
                                        className='object-contain h-full w-full rounded-lg lg:rounded-xl'
                                    />
                                </div>
                                {/* image 2 */}
                                <div className='rounded-lg lg:rounded-xl px-4 border border-[var(--stroke)]'>
                                    <Image 
                                        src={HumanWritten}
                                        alt="HumanWritten"
                                        loading="lazy"
                                        className='object-contain h-full w-full rounded-lg lg:rounded-xl'
                                    />
                                </div>
                            </div>

                            {/* moving-forward */}
                            <div id='moving-forward' className='mb-10 sm:mb-16 scroll-mt-10 sm:scroll-mt-16'>
                                <h2 className="heading-font font-semibold text-2xl sm:text-3xl tracking-[-0.05rem]">Moving Forward: Your Competitive Advantage in the AI-First Search Era!</h2>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">So, AI Overviews are rewriting how search results work. Brands that adapt quickly will gain a major edge. Staying visible now requires - smarter and sharper content.</p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Your messaging must show precision and authority. You already excel at effective communication. Now it is time to sync that skill with AI search behavior.</p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">Every detail—from schema to brand voice—matters more than ever. Let us build a strategy that earns citations and protects your traffic.</p>
                                <p className="mt-3 sm:mt-6 content-font text-lg lg:text-xl tracking-[-0.05rem]">If you require expert assistance? Explore our consulting services at notionX to drive a - technical SEO audit, local GEO enhancements, and personalized GEO strategy.</p>
                            </div>
                            
                            {/* Author details */}
                            <div className='mb-10 sm:mb-12 lg:max-w-5xl sm:w-[45rem] mx-auto container'>
                                <div className="px-[1px] py-[1px] rounded-xl sm:rounded-[20px] bg-[radial-gradient(circle_at_center,#FF4E18_40%,#FEE7DF)]">
                                    <div className="py-3 sm:py-5 px-4 sm:px-10 flex flex-row justify-between items-center rounded-xl sm:rounded-[20px] bg-[#FAF7F5]">
                                        <div className='flex flex-col space-y-2 border-l-[2px] border-l-[var(--cta)] pb-[1px] ps-2 lg:ps-4'>
                                            <span className="heading-font font-bold text-2xl sm:text-[28px]">Emily Thornton</span>
                                            <h3 className="content-font text-base sm:text-lg">Content & Authority Building Specialist</h3>
                                        </div>
                                        <div className=''>
                                            <Image 
                                                src={AuthorImage} 
                                                alt="Author Image" 
                                                className='w-20 sm:h-20 object-cover rounded-full'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* read more blogs */}
                    <div className='bg-[#FAF7F5]'>
                        <div className='container mx-auto py-16 sm:py-20 lg:py-28 justify-center place-items-center'>
                            <div className='mb-10 sm:mb-16'>
                                <p className="heading-font font-semibold text-xl sm:text-2xl lg:text-3xl text-center tracking-[-0.05rem]">Relevant Knowledge Base</p>
                            </div>
                            <div className='grid grid-col-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-5 xl:gap-7 mx-4 sm:mx-0 lg:mx-5'>
                            
                                {blogPosts.map((blog) => (
                                    <div key={blog.id} className='p-3 lg:p-4 border border-[var(--stroke)] rounded-xl sm:rounded-[1.25rem] overflow-hidden
                                    bg-[radial-gradient(ellipse_at_top_left,#FFF0E0_0%,#FCD0D4_30%,transparent_55%),radial-gradient(ellipse_at_bottom_right,#FFF0E0_0%,#FCD0D4_30%,transparent_55%)]'>
                                    
                                    <div className='flex flex-col gap-1 sm:gap-2 h-full items-stretch'>

                                        {/* Image */}
                                        <Link href={blog.href} rel="noopener noreferrer"
                                        className='w-auto lg:h-44 rounded-t-xl sm:rounded-t-[0.875rem] overflow-hidden'>
                                        <Image src={blog.image} alt={blog.title} className="object-cover h-full" />
                                        </Link>

                                        {/* Content */}
                                        <Link href={blog.href} rel="noopener noreferrer"
                                        className='bg-white flex flex-col justify-between flex-grow p-3 lg:p-4 rounded-b-xl sm:rounded-b-[0.875rem]'>
                                        
                                        <span className="text-sm text-left text-[var(--foreground)] content-font">{blog.tag}</span>
                                        <h2 className="heading-font font-medium text-lg lg:text-xl leading-5 sm:leading-6 tracking-[-0.06rem] my-2 hover:text-[var(--cta)]">{blog.title}</h2>
                                        <p className="text-sm sm:text-base text-[#0f0a08c1] content-font mb-2 lg:mb-4">{blog.desc}</p>

                                        <div className='flex sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row justify-between items-center mt-auto'>
                                            <p className='text-[#878483] content-font text-xs'>{blog.date} &nbsp; | &nbsp; {blog.readTime}</p>
                                            <p className='cursor-pointer group text-[var(--cta)] content-font text-sm sm:text-lg flex items-center font-bold hover:text-[var(--cta)] transition duration-300'>
                                            Read More
                                            <span className='text-[var(--cta)] ps-1 text-base sm:text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'>
                                                <HiMiniArrowSmallRight />
                                            </span>
                                            </p>
                                        </div>
                                        </Link>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Blog5
