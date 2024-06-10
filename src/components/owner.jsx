export default function OwnerPage() {
    return (
        <div className="flex flex-col h-screen bg-gray-300 items-center">
            <h1 className="text-3xl font-bold my-3">30_Soravit</h1>
            <div className="w-[400px] h-[400px] border border-black rounded-full overflow-hidden">
                <img src="./public/Batman-Pondering-meme-6.jpg" alt="Soravit" className="object-cover w-full h-full" />
            </div>
            <h2 className="my-5 text-xl font-bold">Short Biography</h2>
            <p className="p-10">
            I graduated from “Generation Thailand Junior Software Developer Bootcamp”, and I am excited to embark on a new career path as a software developer, The software developer path is my dream, I worked auto-mechanic 5 years and turned to other jobs like sales consultant, I am adaptable to change and possess excellent communication, teamwork, and fast-learning skills. I am also capable of performing well under pressure.</p>
        </div>
    );
}