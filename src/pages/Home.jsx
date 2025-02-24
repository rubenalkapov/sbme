function Home() {
    return (
        <div className="text-center p-10">
            <h1 className="text-4xl font-bold flex justify-center items-center">
                Bienvenue chez SBME
                <svg className="inline-svg mt-2" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512">
                    <defs>
                        <linearGradient id="meteoconsLightningBoltFill0" x1="8.7" x2="80.9" y1="17.1" y2="142.1" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#f7b23b"/>
                            <stop offset=".5" stopColor="#f7b23b"/>
                            <stop offset="1" stopColor="#f59e0b"/>
                        </linearGradient>
                        <symbol id="meteoconsLightningBoltFill1" viewBox="0 0 102.7 186.8">
                            <path fill="url(#meteoconsLightningBoltFill0)" stroke="#f6a823" strokeMiterlimit="10" strokeWidth="4" d="m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z">
                                <animate id="meteoconsLightningBoltFill2" attributeName="opacity" begin="0s; x1.end+.67s" dur="1.33s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1"/>
                            </path>
                        </symbol>
                    </defs>
                    <use width="102.7" height="186.7" href="#meteoconsLightningBoltFill1" transform="translate(186.37 130)scale(1.36)"/>
                </svg>
            </h1>
            <p className="mt-4 text-lg">Nous offrons les meilleurs services pour nos clients.</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
                <img src="https://source.unsplash.com/400x300/?business" alt="Business 1" className="rounded-lg" />
                <img src="https://source.unsplash.com/400x300/?office" alt="Business 2" className="rounded-lg" />
                <img src="https://source.unsplash.com/400x300/?team" alt="Business 3" className="rounded-lg" />
            </div>
        </div>
    );
}

export default Home;