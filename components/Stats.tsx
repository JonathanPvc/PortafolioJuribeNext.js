export default function Stats() {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-6">

        <div className="border border-gray-800 rounded-2xl p-8">
          <h3 className="text-4xl font-bold">
            4+
          </h3>

          <p className="text-gray-400 mt-2">
            Years of Experience
          </p>
        </div>

        <div className="border border-gray-800 rounded-2xl p-8">
          <h3 className="text-4xl font-bold">
            20+
          </h3>

          <p className="text-gray-400 mt-2">
            Applications Delivered
          </p>
        </div>

        <div className="border border-gray-800 rounded-2xl p-8">
          <h3 className="text-4xl font-bold">
            10+
          </h3>

          <p className="text-gray-400 mt-2">
            Technologies Used
          </p>
        </div>

      </div>
    </section>
  );
}