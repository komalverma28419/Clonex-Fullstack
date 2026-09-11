import { reasons } from "../../data/chooseData";

const Choose = () => {
  return (
    <section className="py-6 md:py-10 xl:py-14 dark:bg-dark-alternate">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14 ">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Why Choose Clonex 
          </span>

          <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-dark dark:text-dark-text">
            Why Businesses Choose{" "}
            <span className="text-primary">Clonex</span>
          </h2>

          <p className="mt-2 text-base text-font/60 dark:text-dark-muted/60">
            We combine intelligent technology, customer-focused innovation, and
            reliable performance to help businesses communicate smarter, grow
            faster, and build stronger customer relationships.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex w-10 h-10 md:h-14 md:w-14 items-center justify-center rounded-lg md:rounded-xl bg-primary/10 text-primary group-hover:bg-cyan-600 group-hover:text-secondary transition-all duration-300">
                  <Icon className="w-5 h-5 md:w-7 md:h-7"/>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-dark dark:text-dark-text">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm md:text-base text-font dark:text-dark-muted">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Choose;