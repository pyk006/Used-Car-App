
export default function SearchResultCardInfo({singleCard}) {
    return (
        <div className="font-ojuju">
            <h1 className="text-2xl pb-6">Overview</h1>
            <p className="">{singleCard["description"]}</p>
            <div className="grid grid-cols-4 gap-4 pt-[100px] basis-1/5 sm:basis-full">
            <section className="py-4">
            <h3>Model</h3>
            <p>{singleCard["model"]}</p>
            </section>
            <section className="py-4">
            <h3>Year</h3>
            <p>{singleCard["year"]}</p>
            </section>
            <section className="py-4">
            <h3>Mileage</h3>
            <p>{singleCard["odometer"]}</p>
            </section>
            <section className="py-4">
            <h3>Condition</h3>
            <p>{singleCard["condition"] ? singleCard["condition"] : "Condition not available"}</p>
            </section>
            <section className="py-4">
            <h3>Fuel Type</h3>
            <p>{singleCard["fuel"]}</p>
            </section>
            <section className="py-4">
            <h3>Transmission</h3>
            <p>{singleCard["transmission"]}</p>
            </section>
            <section className="py-4">
            <h3>Cylinders</h3>
            <p>{singleCard["cylinders"] ? singleCard["cylinders"] : "Cylinders Info Not Available"}</p>

            </section>
            <section>
            <h3>Sale Location</h3>
            <p>{singleCard["county"] ? singleCard["county"].toUpperCase() : "COUNTY NOT AVAILABLE" + " " + singleCard["state"] ? singleCard["state"].toUpperCase() : "State Info Not Available"}</p>
            </section>
            </div>
        </div>
    )
}