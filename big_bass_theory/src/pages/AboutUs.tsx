const AboutUs = () => {
    return (
      <div className="flex flex-col items-center w-screen bg-secondary/30">
        {/* Section: Our Mission */}
        <section className="w-full p-20 mt-48 text-center">
          <h1 className="mb-16 font-black font-title text-7xl">Our Mission</h1>
          <div className="flex flex-col items-center">
            <p className="w-[35%] text-3xl text-justify leading-[70px] text-gray-600 font-info">
              Fishing is a large endevour. It requires patience, time, and perhaps most of all,
              some <span className="italic">good, good</span> gear. Kota Ishiyama and Cade Niemann understand 
              all too well that having access to <span className="underline">high quality</span>, <span className="underline">sleek</span>, and <span className="underline">util</span> tackling gear is 
              a game changer for many fishers. So, gathering from their experiences fishing and 
              what they would have wanted, they sell fishing gear of the highest quality <span className="italic font-bold">and</span> utility: 
              the things that they wish to fish with every single day. 
            </p>
          </div>
        </section>
  
        {/* Section: The People Behind It */}
        <section className="flex flex-col items-center justify-center w-full h-auto p-10 text-center bg-white">
          <h2 className="mb-16 font-black mt-28 text-7xl font-title">The People Behind It</h2>
          <div className="flex flex-row items-start justify-center h-auto py-10 space-x-10 w-[55%] font-info">
            {/* Left Photo */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Kota Ishayama"
                className="object-cover rounded-lg min-h-[540px] max-w-[360px]"
              />
            </div>

            {/* Middle Text Section */}
            <div className="flex flex-col justify-between space-y-16 h-full w-[50%]">
              {/* Kota's Section */}
              <div className="mb-20">
                <h3 className="mb-4 text-4xl font-bold text-left">Kota Ishiyama</h3>
                <p className="text-2xl text-justify text-gray-600">
                  Together, our team combines passion and technical skill to deliver
                  products that truly resonate with fishing enthusiasts worldwide. From
                  design to production, we work tirelessly to exceed your expectations.
                </p>
              </div>

              {/* Cade's Section */}
              <div className="flex flex-col">
                <h3 className="mb-4 text-4xl font-bold text-right">Cade Niemann</h3>
                <p className="text-2xl text-justify text-gray-600">
                  Together, our team combines passion and technical skill to deliver
                  products that truly resonate with fishing enthusiasts worldwide. From
                  design to production, we work tirelessly to exceed your expectations.
                </p>
              </div>
            </div>

            {/* Right Photo */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Cade Niemann"
                className="object-cover rounded-lg min-h-[540px] max-w-[360px]"
              />
            </div>
          </div>
        </section>
      </div>
    );
}
  
export default AboutUs;