import HorizentalRule from "./HorizentalRule";

function About() {
  return (
    <div className="overflow-auto pt-8 px-8 text-black bg-slate-100 dark:text-white dark:bg-slate-950">
      <h1 className="mb-4 ml-8 text-4xl font-extrabold">About Us</h1>
      <div className="p-4 rounded-lg">
        <p className="m-4 text-2xl">
          <span className="text-4xl font-bold">
            In the bustling world of philanthropy, Kraken Charity stands tall as
            a beacon of hope and compassion. With a mission to bridge the gap
            between those in need and generous hearts, this innovative charity
            finder company has revolutionized the way people connect with
            meaningful causes.{" "}
          </span>
          <p className="my-8 text-2xl font-medium">
            Armed with cutting-edge technology and a dedicated team of
            passionate souls, Kraken Charity navigates the vast ocean of
            charitable organizations to unearth hidden gems that make a tangible
            difference in the world. Beyond its role as a conduit of giving,
            Kraken Charity takes an active role in promoting transparency and
            accountability in the charitable sector. Their tireless efforts in
            vetting and monitoring partner organizations instill confidence in
            donors, knowing that their contributions are utilized efficiently
            and responsibly. Through its innovative approach and unwavering
            commitment to making the world a better place, Kraken Charity has
            become a force of good, empowering individuals and communities to
            create a ripple effect of positive change. As the sun sets on each
            day, Kraken Charity continues to inspire hope, one act of kindness
            at a time, casting a compassionate net far and wide across the seas
            of humanity.
          </p>
        </p>
        <div className="m-4 mt-8 font-light text-2xl">
          * Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
      <HorizentalRule />
      <div className="overflow-scroll my-4 py-4">
        <div
          className="rounded-lg bg-cover bg-no-repeat bg-fixed filter grayscale hover:filter-none transition ease-out duration-500"
          style={{
            backgroundPositionX: "left",
            backgroundPositionY: "bottom",
            backgroundImage:
              "url(https://images.unsplash.com/photo-1541976844346-f18aeac57b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2448&q=80)",
          }}
        >
          <div className="rounded-lg p-8 py-24 text-5xl font-extrabold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <p className="py-4">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <HorizentalRule />
    </div>
  );
}

export default About;
