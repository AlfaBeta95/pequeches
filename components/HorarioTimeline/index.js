export default function HorarioTimeline() {
  return (
    <>
      <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-coolGray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">Acollida</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">9:00</time>
                  <p className="mt-3">Solemos deixar media hora á entrada para que os cativos non se amoreen e diminuír así o risco de contaxio.</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">Xogo libre</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">9:30</time>
                  <p className="mt-3">Deixamos que os nenos se relacionen xogando e descarguen algo as enerxías extra que traen de casa.</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">Relaxación/Charla</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">10:00</time>
                  <p className="mt-3">Tomamos un momento para falar tranquilamente e contarnos as nosas inquietudes ou anécdotas, xeralmente é un momento que disfrutamos moito..</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">Snack</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">11:00</time>
                  <p className="mt-3">Para o momento do snack, recomendámoslle aos nenos que traian algo de casa, nos poñemos a froita :P</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">LudoChess e outras actividades!</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">11:30</time>
                  <p className="mt-3">Hora de poñerse mans a obra, realizamos actividades diversas que preparamos con moito agarimo para que as disfruten, entre elas o xadrez, como non.</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">Despedida</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">13:30</time>
                  <p className="mt-3">Igual que na <i>Acollida</i>, deixamos media hora para que os pais recollan aos nenos pouco a pouco, ordeadamente e coidando as distancias.</p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-semibold tracking-wide">Fin da pequexornada!</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">14:00</time>
                  <p className="mt-3">Os <strong>Pequecheses</strong> remataron a xornada, hora de voltar a casa!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        h3 {
          color: #ca6666;
        }
        p, time {
          margin-left: 1em;
          color: #ca7777;
        }
    `}</style>
    </>
  );
}