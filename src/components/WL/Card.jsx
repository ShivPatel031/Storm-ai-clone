function Card({title,text}) {
  return (
    <div className="text-center" style={{ opacity: "1", transform: "none" }}>
      <a
        className="card bg-base-100 border w-44 h-44 md:w-52 md:h-52 transition-all duration-300 hover:drop-shadow-2xl cursor-pointer items-center justify-center"
        href="https://storm.genie.stanford.edu/article/location-based-entertainment-vr-theater-11779"
        target="_blank"
      >
        <div
          className="p-2 md:p-4 overflow-y-hidden"
          style={{
            backgroundImage: `linear-gradient(
              black 30%,
              transparent 100%
            )`,
            backgroundClip: `text`,
            color: `transparent
          `,
          }}
        >
          <p className="text-primary font-semibold">
            {title}
          </p>
          <p className="text-sm text-left px-1 mt-[0.5rem]">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
}

export {Card}