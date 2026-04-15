import { Link } from 'react-router-dom';

const cities = [
    { name: 'Vadodara', slug: 'vadodara' },
    { name: 'Ahmedabad', slug: 'ahmedabad' },
    { name: 'Surat', slug: 'surat' },
    { name: 'Gandhinagar', slug: 'gandhinagar' },
    { name: 'Bangalore', slug: 'bangalore' },
    { name: 'Delhi', slug: 'delhi' },
    { name: 'Mumbai', slug: 'mumbai' },
    { name: 'Mysore', slug: 'mysore' },
];

const CityNav = () => {
    return (
        <div className="bg-slate-100 py-8">
            <div className="container mx-auto px-4">
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                    Garment Store Software by City
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {cities.map((city) => (
                        <Link
                            key={city.slug}
                            to={`/garment-store-software-${city.slug}`}
                            className="px-6 py-3 bg-white text-slate-700 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors border border-slate-200 hover:border-blue-600"
                        >
                            {city.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CityNav;
