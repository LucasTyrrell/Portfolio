export const Hero = () => {
    return <section className='relative min-h-screen flex items-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
            <img src='/paper.jpg' alt='paper' className='w-full h-full object-cover opacity-50'/>
            <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background'/>
        </div>


        {/* Content */}
        <div className='container mx-auto relative z-10 px-6 pt-32 pb-20 relative z-10'>
            <div className ='grid lg:grid-cols-2 gap-12 items-center'>
                {/* Left Column */}
                <div className='space-y-8'>
                    <div className='animate-fade-in'>
                        <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                            <span className='w-2 h-2 bg-primary rounded-full'></span>
                            Newcastle University Student
                        </span>
                    </div>
                </div>
                {/* Right Column */}
            </div>

        {/* Headline */}
            <h1>
                
            </h1>
        </div>
    </section>;
};