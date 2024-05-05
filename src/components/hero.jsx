export default function Hero() {
  return (
      <section className="grid grid-cols-2 bg-section-backg rounded-3xl py-28 text-white">
        <div >
          <h1 className="text-4xl font-semibold pl-4 text-blue-color">
            Les derniers<br/>lieux<br/>tendances</h1>
          <p className="my-4">  
              Laissez vous guider  par les derniers lieux qui ont été enregistrés
          </p>
          <div className="button pt-4">
            <button className="bg-blue-color flex items-center text-white rounded-2xl px-8 py-2 font-semibold">
              Voir plus de lieux
            </button>
          </div>
        </div>
      </section>
  );
}