import './Services.css';

export default function Services({ servicesData }) {
    return (
        <div className="services wrapper">
            <div className="heading flex-between">
                <h2>{servicesData.heading}</h2>
                <p>{servicesData.descr}</p>
            </div>

            <div className="box-container">
                <div className="left-side">
                    {servicesData.items.slice(0, 3).map((item, idx) => (
                        <div className="box" key={idx}>
                            <h3>{item.title}</h3>
                            <p>{item.descr}</p>
                            <img src={item.image} alt={item.title} />
                        </div>
                    ))}
                </div>

                <div className="right-side">
                    <h3>{servicesData.items[3].title}</h3>
                    <p>{servicesData.items[3].descr}</p>
                    <img src={servicesData.items[3].image} alt={servicesData.items[3].title} />
                </div>
            </div>
        </div>
    );
}