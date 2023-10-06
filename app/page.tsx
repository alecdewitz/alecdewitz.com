import Link from "next/link";

export default function Home() {
  return (
    <main className="py-10 px-6 space-y-5 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Alec Dewitz</h1>
        <div className="text-gray-500 text-sm">Founder & AI Engineer</div>
        <div></div>
      </div>
      <div>
        <div>
          <ul className="ml-1 list-inside text-sm list-disc">
            <li>
              <Link
                href="https://cadre.io"
                className="hover:underline text-blue-500"
                target="_blank"
              >
                Cadre
              </Link>{" "}
              - All-in-one mental health & wellness for employers
            </li>

            <li className="text-gray-500">Smol AI</li>
            <li className="text-gray-500">Rumi</li>
            <li className="text-gray-500">Datasite</li>
            <li className="text-gray-500">Infinite Campus</li>
          </ul>
        </div>
      </div>
      <div className="text-sm text-gray-700">
        Contact me{" "}
        <Link
          href="https://x.com/alecdewitz"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          @alecdewitz
        </Link>{" "}
        on X.
      </div>
    </main>
  );
}
