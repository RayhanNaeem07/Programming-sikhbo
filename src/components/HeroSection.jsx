

const HeroSection = () => {
    return (
        <div className="flex flex-col text-center text-white px-4 items-center justify-center h-[90vh]" style={{backgroundImage:"url('src/assets/unsplash.jpg')",backgroundPosition:'center',backgroundSize:'cover'}}>
            <h1 className="text-4xl md:text-6xl">Welcome to my website</h1>
            <p className="text-2xl py-2">Your journey start here</p>
            <button className="bg-white py-2 px-4 text-black cursor-pointer hover:bg-gray-400">Click me</button>
        </div>
    );
};

export default HeroSection;