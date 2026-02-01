export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-50 via-white to-green-50 font-sans">
      {/* Tricolor Top Border */}
      <div className="fixed top-0 left-0 right-0 flex h-3">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>

      {/* Main Content */}
      <div className="text-center px-6 py-12">
        {/* Ashoka Chakra */}
        <div className="mx-auto mb-8 w-32 h-32 rounded-full border-4 border-[#000080] flex items-center justify-center relative">
          <div className="absolute inset-2 rounded-full border-2 border-[#000080]"></div>
          <div className="w-3 h-3 rounded-full bg-[#000080]"></div>
          {/* Spokes */}
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-12 bg-[#000080] origin-bottom"
              style={{
                transform: `rotate(${i * 15}deg)`,
                bottom: '50%',
              }}
            ></div>
          ))}
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-[#FF9933]">Happy</span>{" "}
          <span className="text-[#000080]">Republic</span>{" "}
          <span className="text-[#138808]">Day</span>
        </h1>

        {/* Year Badge */}
        <div className="inline-block bg-[#000080] text-white px-6 py-2 rounded-full text-xl font-semibold mb-6">
          77th Republic Day - 2026
        </div>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl text-gray-700 mb-4">
          Jai Hind!
        </p>

        {/* Message */}
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Celebrating the spirit of our Constitution and the unity in diversity
          that makes India incredible.
        </p>

        {/* Personal Message */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 max-w-md mx-auto border border-gray-100">
          <p className="text-gray-700 text-lg">
            Warm wishes from
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-[#FF9933] via-[#000080] to-[#138808] bg-clip-text text-transparent">
            Sam Shivam Pritam
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-4">
          <div className="w-16 h-1 bg-[#FF9933] rounded"></div>
          <div className="w-16 h-1 bg-white border border-gray-200 rounded"></div>
          <div className="w-16 h-1 bg-[#138808] rounded"></div>
        </div>
      </div>

      {/* Tricolor Bottom Border */}
      <div className="fixed bottom-0 left-0 right-0 flex h-3">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>
    </div>
  );
}
