function BackgroundVideo() {
    return (
        <div class="h-[100%] w-[100%] fixed lg:h-[222%]">
            <video autoPlay loop muted class=" -z-100 h-[100%] w-[100%] rotate-0 lg:rotate-90 lg:h-[100%]">
                <source src="/PlanetBg.webm" type="video/webm" />
            </video>
        </div>
    );
}

export default BackgroundVideo;