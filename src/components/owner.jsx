export default function OwnerPage() {
    return (
        <div className="flex flex-col h-screen bg-gray-300 items-center">
            <h1 className="text-3xl font-bold my-3">30_Soravit</h1>
            <div className="w-[400px] h-[400px] border border-black rounded-full overflow-hidden">
                <img src="public\Batman-slapping-Robin-Meme-Blank.avif" alt="Soravit" className="object-cover w-full h-full" />
            </div>
            <h2 className="my-5 text-xl font-bold">Short Biography</h2>
            <p>I am a Web Developer</p>
        </div>
    );
}