import './services.css'



const data = [
    {
        id: 1,
        icon: "fa-solid fa-compass-drafting",
        title: "Architectural Design",
        description: {
            1: 'Design of new buildings, including homes, businesses and institutions.',
            2: 'Redesigning existing buildings.',
            3: 'Design of interior and exterior spaces.',
            4: 'Garden and landscape design.',
        },
    },
    {
        id: 2,
        icon: "fa-solid fa-pen-ruler",
        title: "Planning",
        description: {
            1: 'Planning and designing spaces functionally and aesthetically.',
            2: 'Taking into account clients needs and budget.',
            3: 'Enforce safety and construction standards.',
            4: 'Obtaining the necessary licenses from the competent authorities.',
        },
    },
    {
        id: 3,
        icon: "fa-solid fa-file-contract",
        title: "Construction supervision",
        description: {
            1: 'Monitor the workflow on site and ensure the quality of implementation.',
            2: 'Coordination between contractors and workers.',
            3: 'Solve problems that may arise during the construction process.',
            4: 'Ensure project completion on time and within allocated budget.',
        },
    },
    {
        id: 4,
        icon: "fa-solid fa-clipboard-question",
        title: "Consultations",
        description: {
            1: 'Advising clients on various aspects of design and construction.',
            2: 'Assist clients in selecting appropriate materials and finishes.',
            3: 'Conducting feasibility studies for projects.',
            4: 'Providing real estate evaluation services.',
        },
    },
    {
        id: 5,
        icon: "fa-solid fa-building-user",
        title: "project management",
        description: {
            1: 'Manage all aspects of the project from planning to implementation.',
            2: 'Coordination between the various teams working on the project.',
            3: 'Monitor costs and ensure adherence to budget.',
            4: 'Ensure project completion on time.',
        },
    },
    {
        id: 5,
        icon: "fa-solid fa-paint-roller",
        title: "Other services",
        description: {
            1: 'Providing interior design services.',
            2: 'Design and implementation of decoration works.',
            3: 'Providing architectural photography services.',
            4: 'Providing real estate surveying services.',
        },
    },
];

function Services() {
    return (
        <section className="services container section" id='services'>
            <h2 className="section-title">Services</h2>

            <div className="services-container grid">
                {data.map(({ id, icon, title, description }) => {
                    return (
                        <div className="services-card" key={id}>
                            <i className={`services-icon ${icon}`}></i>
                            <h3 className="services-title">{title}</h3>
                            <ul className="services-description">
                                <li>{description[1]}</li>
                                <li>{description[2]}</li>
                                <li>{description[3]}</li>
                                <li>{description[4]}</li>
                            </ul>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services