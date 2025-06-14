import ReactPlayer from "react-player";
export const IutSection = () => {
    return (
        <section id="iut" className="py-24 px-4 relative bv-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Vidéo{" "}
                    <span className="text-primary">
                        Mon BUT en 180 secondes
                    </span>
                </h2>
                <ReactPlayer
                    controls
                    width="100%"
                    // height="480px"
                    url="https://youtu.be/giEgIP5xk6A"
                ></ReactPlayer>
            </div>
        </section>
    );
};
