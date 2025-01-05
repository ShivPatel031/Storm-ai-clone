import conceptimage from "../../assets/concept_image.jpg";
function WithoutLoginHomeContent() {
  return (
    <>
      <div className="min-h-[90vh]">
        <div className="mt-20 px-4 pt-12">
          {/* <div className="z-10 flex items-center justify-center mb-4 md:mb-2">
            <div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
              <div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
              ✨ <span className="ml-2"></span>
              <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                We thank Microsoft Azure for cloud credits
              </span>
            </div>
          </div> */}
          <div className="flex justify-center">
            <h1 className="text-6xl font-bold">
              <span className="text-blue-500">
                <strong>Co-</strong>
              </span>
              STORM
            </h1>
          </div>
          <h1
            className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-5xl md:leading-[3.5rem]"
            style={{ opacity: "1", transform: "none" }}
          >
            <span style={{ opacity: "1", transform: "none" }}>Get </span>
            <span style={{ opacity: "1", transform: "none" }}>a </span>
            <span style={{ opacity: "1", transform: "none" }}>
              Wikipedia-like{" "}
            </span>
            <span style={{ opacity: "1", transform: "none" }}>report </span>
            <span style={{ opacity: "1", transform: "none" }}>on </span>
            <span style={{ opacity: "1", transform: "none" }}>your </span>
            <span style={{ opacity: "1", transform: "none" }}>topic </span>
            <span style={{ opacity: "1", transform: "none" }}>with </span>
            <span style={{ opacity: "1", transform: "none" }}>AI </span>
          </h1>
          <div
            className="text-center"
            style={{ opacity: "1", transform: "none" }}
          >
            <span className="text-xl md:text-2xl text-gray-500 md:leading-[3.5rem]">
              STORM is a research prototype that supports
            </span>
          </div>
          <div
            className="text-center"
            style={{ opacity: "1", transform: "none" }}
          >
            <span className="text-xl md:text-2xl text-gray-500 md:leading-[0.05rem]">
              interactive knowledge curation.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="btn btn-neutral btn-lg min-h-[3rem] h-[3rem] mt-6 rounded-full flex flex-wrap"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Get Started
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              className="svg-inline--fa fa-arrow-right w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <div
            className="md:hidden"
            style={{
              background: `linear-gradient(
          90deg,
          rgb(246, 158, 28) 0%,
          rgb(220, 40, 40) 26.5625%,
          rgb(39, 100, 235) 64%,
          rgb(22, 163, 74) 100%
        )`,
              filter: "blur(100px)",
              width: "350px",
              height: "500px",
              position: "absolute",
              opacity: "0.5",
            }}
          ></div>
          <div
            className="hidden md:block"
            style={{
              background: `linear-gradient(
          90deg,
          rgb(246, 158, 28) 0%,
          rgb(220, 40, 40) 26.5625%,
          rgb(39, 100, 235) 64%,
          rgb(22, 163, 74) 100%
        )`,
              filter: "blur(100px)",
              width: "700px",
              height: "500px",
              position: "absolute",
              opacity: "0.5",
            }}
          ></div>
          <div className="carousel md:max-w-[1000px] max-w-[800px]">
            <div id="slide2" className="carousel-item relative w-full">
              <div className="w-full mockup-browser border bg-base-300 mx-4 h-fit">
                <div className="mockup-browser-toolbar">
                  <div className="input">STORM &amp; Co-STORM</div>
                </div>
                <div className="bg-white">
                  <div className="flex justify-center px-4 py-16 max-h-[1000px] max-w-[800px] mx-auto">
                    <img
                      alt="concept-image"
                      loading="lazy"
                      width="3384"
                      height="2489"
                      decoding="async"
                      data-nimg="1"
                      //       srcSet="
                      //   /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconcept_image.1317b2dc.jpg&amp;w=3840&amp;q=75 1x
                      // "
                      src={conceptimage}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { WithoutLoginHomeContent };
